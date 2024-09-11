from django.shortcuts import render
from rest_framework import viewsets
from .models import Tour
from .serializers import Tour_Serializer


class Tour_View_Set(viewsets.ModelViewSet):
    queryset = Tour.objects.all()
    serializer_class = Tour_Serializer
