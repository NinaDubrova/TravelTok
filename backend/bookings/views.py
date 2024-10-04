from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Booking
from .serializers import Booking_Serializer

# Create your views here.
class Booking_View_Set(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = Booking_Serializer
    permission_classes = [IsAuthenticated]  # Защита для пользователей.

    def perform_create(self, serializer):
        # Привязка бронирования к текущему пользователю.
        serializer.save(user=self.request.user)  
