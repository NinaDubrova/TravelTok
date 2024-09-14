from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.utils import timezone

# Create your models here.
class Custom_User_Manager(BaseUserManager):
    def create_user(self, email, password = None, **extra_fields):
        if not email:
            raise ValueError("Поле email должен быть заполнен.")
        email = self.normalize_email(email)
        user = self.model(email = email, **extra_fields)
        user.set_password(password)
        user.save(using = self._db)
        return user

    def create_superuser(self, email, password = None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        return self.create_user(email, password, **extra_fields)


class Custom_User(AbstractBaseUser):
    first_name = models.CharField(max_length = 30)
    last_name = models.CharField(max_length = 30)
    photo = models.ImageField(upload_to = "users_photos/%Y%m%d", null = True, blank = True)
    age = models.IntegerField(null = True)
    sex = models.CharField(max_length=10, choices = [('М', 'Mужчина'), ('Ж', 'Женщина')], 
                           null=True)
    email = models.EmailField(unique = True)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    is_active = models.BooleanField(default = True)
    is_staff = models.BooleanField(default = False)
    is_superuser = models.BooleanField(default = False)

    objects = Custom_User_Manager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ["first_name", "last_name"]

    def __str__(self):
        return self.email
