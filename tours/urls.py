from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import Tour_View_Set


router = DefaultRouter()
router.register(r'tours', Tour_View_Set, basename = 'tour')

urlpatterns = [
    path('', include(router.urls)),
]
