from django.db import models
from django import forms
from wagtail.wagtailsearch import index

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
        verbose_name_plural = 'activity school levels'

class Activity(models.Model):
    title = models.CharField(max_length=250)
    description = models.CharField(max_length=250)
    school_level = ParentalManyToManyField('ActivitySchoolLevel', blank=True)

class ActivityPage(CFGOVPage):
    activity_title = models.CharField(max_length=250)
    activity_description = RichTextField(blank=True)
    school_level = ParentalManyToManyField('ActivitySchoolLevel', blank=True)

    search_fields = CFGOVPage.search_fields + [
        index.SearchField('activity_title'),
        index.SearchField('activity_description'),
    ]

    edit_handler = TabbedInterface([
        ObjectList(Page.content_panels + [ 
            FieldPanel('activity_title', classname="full"),
            FieldPanel('activity_description', classname="full"),
            FieldPanel('school_level', widget=forms.CheckboxSelectMultiple),],
            heading='General Content'),
        ObjectList(CFGOVPage.sidefoot_panels, heading='Sidebar/Footer'),
        ObjectList(CFGOVPage.settings_panels, heading='Configuration'),
    ])
    objects = CFGOVPageManager()
   

