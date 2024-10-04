from rest_framework import serializers
from .models import Booking


class Booking_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'
