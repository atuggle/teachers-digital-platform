from django.db import models
from django import forms
from wagtail.wagtailsearch import index
from wagtail.contrib.wagtailroutablepage.models import RoutablePageMixin, route

from wagtail.wagtailcore.models import Page
from wagtail.wagtailcore.fields import RichTextField
from wagtail.wagtailadmin.edit_handlers import FieldPanel, InlinePanel, TabbedInterface, ObjectList
from v1.models import CFGOVPage, CFGOVPageManager
from modelcluster.fields import ParentalKey, ParentalManyToManyField


class TDPPage(CFGOVPage):
    # super(CFGOVPage)
    body = RichTextField(blank=True)
    intro = models.CharField(max_length=250)

    edit_handler = TabbedInterface([
        ObjectList(Page.content_panels + [ 
            FieldPanel('body', classname="full"),
            FieldPanel('intro', classname="full")],
            heading='General Content'),
        ObjectList(CFGOVPage.sidefoot_panels, heading='Sidebar/Footer'),
        ObjectList(CFGOVPage.settings_panels, heading='Configuration'),
    ])
    objects = CFGOVPageManager()

class ActivitySchoolLevel(models.Model):
    name = models.CharField(max_length=250)
    panels = FieldPanel('name')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Activity School Level'

class Activity(models.Model):
    name = models.CharField(max_length=250)
    description = models.TextField(max_length=1000)
    school_level = models.ManyToManyField('ActivitySchoolLevel')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Activities'

class ActivityPage(RoutablePageMixin, CFGOVPage):
    edit_handler = TabbedInterface([
        ObjectList(Page.content_panels),
        ObjectList(CFGOVPage.sidefoot_panels, heading='Sidebar/Footer'),
        ObjectList(CFGOVPage.settings_panels, heading='Configuration'),
    ])
    objects = CFGOVPageManager()

    @route(r'^Search/$')
    def activity_search(self, request, *args, **kwargs):
        search_query = request.GET.get('q', None)
        self.activities = self.get_activities()
        if search_query:
            self.activities = self.activities.filter(name__contains=search_query)
            self.search_term = search_query
            self.search_type = 'search'
        return Page.serve(self, request, *args, **kwargs)
   
    @route(r'^/$')
    def get_context(self, request):
        context = super(ActivityPage, self).get_context(request)

        # Add extra variables and return the updated context
        context['activities'] = Activity.objects.all().prefetch_related()
        context['school_levels'] = ActivitySchoolLevel.objects.all()
        return context
