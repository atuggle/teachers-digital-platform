# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import wagtail.contrib.wagtailroutablepage.models


class Migration(migrations.Migration):

    dependencies = [
        ('v1', '0113_modify_help_text_social_sharing_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='ActivityPage',
            fields=[
                ('cfgovpage_ptr', models.OneToOneField(parent_link=True, auto_created=True, primary_key=True, serialize=False, to='v1.CFGOVPage')),
                ('name', models.CharField(max_length=250)),
                ('description', models.TextField(max_length=1000)),
            ],
            options={
                'verbose_name': 'Activity Page',
            },
            bases=('v1.cfgovpage',),
        ),
        migrations.CreateModel(
            name='ActivitySearchPage',
            fields=[
                ('cfgovpage_ptr', models.OneToOneField(parent_link=True, auto_created=True, primary_key=True, serialize=False, to='v1.CFGOVPage')),
            ],
            options={
                'abstract': False,
            },
            bases=(wagtail.contrib.wagtailroutablepage.models.RoutablePageMixin, 'v1.cfgovpage'),
        ),
    ]
