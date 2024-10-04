# Generated by Django 5.1.1 on 2024-09-11 18:55

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Tour',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='Без имени', max_length=150)),
                ('description', models.TextField()),
                ('region', models.CharField(choices=[('баткен', 'Баткен'), ('джалал Абад', 'Джалал Абад'), ('иссык Куль', 'Иссык Куль'), ('нарын', 'Нарын'), ('ош', 'Ош'), ('талас', 'Талас'), ('чуй', 'Чуй')], max_length=20)),
                ('duration', models.IntegerField()),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('photo', models.ImageField(blank=True, null=True, upload_to='tour_photos/%Y%m%d')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tours', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
