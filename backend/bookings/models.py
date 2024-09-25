from django.db import models
from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
USER = get_user_model()


class Booking(models.Model):
    user = models.ForeignKey(USER, on_delete = models.CASCADE, related_name = 'bookings')
    tour_id = models.IntegerField()  # ID тура.
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=10, default='pending')  # Статус бронирования.

    def __str__(self):
        return f"Booking for Tour ID: {self.tour_id} by {self.user.email}"
