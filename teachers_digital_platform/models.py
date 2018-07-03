from django.db import models
from django.db.models import Q
from django import forms
from django.utils import timezone
from wagtail.wagtailsearch import index
from wagtail.contrib.wagtailroutablepage.models import RoutablePageMixin, route

from wagtail.wagtailcore.models import Page
from wagtail.wagtailcore.fields import RichTextField
from wagtail.wagtailadmin.edit_handlers import FieldPanel, InlinePanel, TabbedInterface, ObjectList, MultiFieldPanel
from v1.models import CFGOVPage, CFGOVPageManager
from modelcluster.fields import ParentalKey, ParentalManyToManyField
from wagtail.wagtaildocs.edit_handlers import DocumentChooserPanel


class ActivitySearchPage(RoutablePageMixin, CFGOVPage):
    edit_handler = TabbedInterface([
        ObjectList(Page.content_panels),
        ObjectList(CFGOVPage.sidefoot_panels, heading='Sidebar/Footer'),
        ObjectList(CFGOVPage.settings_panels, heading='Configuration'),
    ])
    objects = CFGOVPageManager()
    subpage_types = ['teachers_digital_platform.ActivityPage']

    activity_query = Q()

    @classmethod
    def can_create_at(cls, parent):
        return super(ActivitySearchPage, cls).can_create_at(parent) \
            and not cls.objects.exists()

    def get_activities(self):
        return ActivityPage.objects.live().child_of(self)

    def get_context(self, request):
        context = super(ActivitySearchPage, self).get_context(request)
        context['activities'] = self.get_activities().filter(self.activity_query)
        return context

    @route(r'^search/$')
    def act_search(self, request, *args, **kwargs):
        search_query = request.GET.get('q', None)
        if search_query:
            self.activity_query = self.activity_query & Q(summary__icontains=search_query)
            self.search_term = search_query
            self.search_type = 'Search'
        return CFGOVPage.serve(self, request, *args, **kwargs)


class ActivityPage(CFGOVPage):
    date = models.DateField('Updated', default=timezone.now)
    summary = models.TextField('Summary', blank=False)
    big_idea = RichTextField('Big idea', blank=False)
    essential_questions = RichTextField('Essential questions', blank=False)
    objectives = RichTextField('Objectives', blank=False)
    what_students_will_do = RichTextField('What students will do', blank=False)
    activity_file = models.ForeignKey(
        'wagtaildocs.Document',
        null=True,
        blank=False,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    handout_file = models.ForeignKey(
        'wagtaildocs.Document',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
         related_name='+'
    )
    edit_handler = TabbedInterface([
        ObjectList(Page.content_panels + [
         FieldPanel('date'),
         FieldPanel('summary'),
         FieldPanel('big_idea'),
         FieldPanel('essential_questions'),
         FieldPanel('objectives'),
         FieldPanel('what_students_will_do'),
         MultiFieldPanel(
             [
                 DocumentChooserPanel('activity_file'),
                      DocumentChooserPanel('handout_file'),
             ], 
         heading = 'General')]),
        ObjectList(CFGOVPage.sidefoot_panels, heading='Sidebar/Footer'),
        ObjectList(CFGOVPage.settings_panels, heading='Configuration'),
    ])
    objects = CFGOVPageManager()
    parent_page_types = [ActivitySearchPage]

    def get_context(self, request):
        context = super(ActivityPage, self).get_context(request)
        if 'q' in request.GET:
            context['url'] = 'http://localhost:8000/activity-list/search/?q=' + request.GET.get('q')
        else:
            context['url'] = 'http://localhost:8000/activity-list/'
        return context

    class Meta:
        verbose_name = 'Activity Page'
