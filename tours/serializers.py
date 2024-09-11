from rest_framework import serializers
from .models import Tour


class Tour_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Tour
        fields = "__all__"