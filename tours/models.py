from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
USER = get_user_model()


class Tour(models.Model):
    # Регионы для выбора места тура.
    REGION_CHOICES = [
        ('баткен', 'Баткен'),
        ("джалал абад", "Джалал Абад"),
        ("иссык куль", "Иссык Куль"),
        ('нарын', 'Нарын'),
        ('ош', 'Ош'),
        ('талас', 'Талас'),
        ('чуй', 'Чуй')
    ]

    name = models.CharField(max_length = 150, default = "Без имени")
    description = models.TextField()
    region = models.CharField(max_length = 20, choices = REGION_CHOICES)
    duration = models.IntegerField()  # Длительность в днях.
    price = models.DecimalField(max_digits=10, decimal_places = 2)  # Стоимость.
    photo = models.ImageField(upload_to="tour_photos/%Y%m%d", null = True, blank = True)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    author = models.ForeignKey(USER, on_delete = models.CASCADE, related_name = 'tours')

    def __str__(self):
        return self.name
