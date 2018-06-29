from django.db import models
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

    def child_pages(self):
        return ActivityPage.objects.live().child_of(self)


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

    class Meta:
        verbose_name = 'Activity Page'
