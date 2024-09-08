from rest_framework import serializers
from .models import Tour


class TourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tour
        fields = ['id', 'title', 'description', 
                  'region', 'duration', 'price', 
                  "discount_price", 'author', "created_at", 
                  "updated_at"]
        read_only_fields = ['author', "created_at", "updated_at"]