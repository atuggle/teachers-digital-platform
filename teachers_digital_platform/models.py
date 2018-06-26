from django.db import models

from wagtail.wagtailcore.models import Page
from wagtail.wagtailcore.fields import RichTextField
from wagtail.wagtailadmin.edit_handlers import FieldPanel, InlinePanel, TabbedInterface, ObjectList
from v1.models import CFGOVPage, CFGOVPageManager


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
