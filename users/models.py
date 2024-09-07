from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    # Установка списка ролей.
    ROLES = [
        ('client', 'Client'),
        ('author', 'Author'),
        ('admin', 'Admin'),
        ('manager', 'Manager'),
        ('consultant', 'Consultant'),
    ]

    role = models.CharField('Роль', max_length = 10)
    email = models.EmailField(unique = True)

    def __str__(self):
        return f"{self.username} ({self.get_role_display()})"