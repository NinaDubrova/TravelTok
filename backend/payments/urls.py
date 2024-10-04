from django.urls import path
from .views import generate_payment_qr


urlpatterns = [
    path("payment/qr/<int:booking_id>/", generate_payment_qr, name = "generate_payment_qr"),


]
