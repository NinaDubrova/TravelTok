# Generated by Django 5.1.1 on 2024-09-21 15:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tours', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tour',
            name='region',
            field=models.CharField(choices=[('баткен', 'Баткен'), ('джалал абад', 'Джалал Абад'), ('иссык куль', 'Иссык Куль'), ('нарын', 'Нарын'), ('ош', 'Ош'), ('талас', 'Талас'), ('чуй', 'Чуй')], max_length=20),
        ),
    ]
