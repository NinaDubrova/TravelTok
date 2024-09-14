from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import User_View_Set
from .views import User_List_View


router = DefaultRouter()
router.register(r'users', User_View_Set, basename = 'user')

urlpatterns = [
    path('', include(router.urls)),
    path('users/', User_List_View.as_view(), name = "user-list"),
]

