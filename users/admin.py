from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from . models import User

# Register your models here.
class Custom_User_Admin(UserAdmin):
    model = User
    list_display = ('username', 'email', 'role', "is_active", "is_staff")
    list_filter = ('role', "is_active", "is_staff")
    search_fields = ('username', 'email')
    ordering = ('email',)

admin.site.register(User, Custom_User_Admin)