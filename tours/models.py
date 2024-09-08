from django.db import models
from users.models import User 

# Create your models here.
class Tour(models.Model):
    # Поля для модели тура.
    title = models.CharField(max_length = 255)
    description = models.TextField()
    region = models.CharField(max_length = 100) 
    duration = models.PositiveIntegerField()  # Продолжительность тура(в днях).
    price = models.DecimalField(max_digits = 10, decimal_places = 2)
    discount_price = models.DecimalField(max_digits = 10, decimal_places = 2, blank = True,
                                         null = True)  # Цена со скидкой.
    author = models.ForeignKey(User, on_delete = models.CASCADE, related_name = 'tours')
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    def __str__(self):
        return self.title
