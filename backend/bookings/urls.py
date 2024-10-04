from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import Booking_View_Set


router = DefaultRouter()
router.register(r'bookings', Booking_View_Set)

urlpatterns = router.urls
