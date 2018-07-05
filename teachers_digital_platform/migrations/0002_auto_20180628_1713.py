# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import wagtail.wagtailcore.fields
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('wagtaildocs', '0007_merge'),
        ('teachers_digital_platform', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='activitypage',
            name='description',
        ),
        migrations.RemoveField(
            model_name='activitypage',
            name='name',
        ),
        migrations.AddField(
            model_name='activitypage',
            name='activity_file',
            field=models.ForeignKey(related_name='+', on_delete=django.db.models.deletion.SET_NULL, to='wagtaildocs.Document', null=True),
        ),
        migrations.AddField(
            model_name='activitypage',
            name='big_idea',
            field=wagtail.wagtailcore.fields.RichTextField(default='Nothing', verbose_name=b'Big idea'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='activitypage',
            name='date',
            field=models.DateField(default=django.utils.timezone.now, verbose_name=b'Updated'),
        ),
        migrations.AddField(
            model_name='activitypage',
            name='essential_questions',
            field=wagtail.wagtailcore.fields.RichTextField(default='Nothing', verbose_name=b'Essential questions'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='activitypage',
            name='handout_file',
            field=models.ForeignKey(related_name='+', on_delete=django.db.models.deletion.SET_NULL, blank=True, to='wagtaildocs.Document', null=True),
        ),
        migrations.AddField(
            model_name='activitypage',
            name='objectives',
            field=wagtail.wagtailcore.fields.RichTextField(default='Nothing', verbose_name=b'Objectives'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='activitypage',
            name='summary',
            field=models.TextField(default='Nothing', verbose_name=b'Summary'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='activitypage',
            name='what_students_will_do',
            field=wagtail.wagtailcore.fields.RichTextField(default='Nothing', verbose_name=b'What students will do'),
            preserve_default=False,
        ),
    ]
