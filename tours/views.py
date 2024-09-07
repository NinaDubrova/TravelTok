from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import Tour
from .serializers import TourSerializer

# Create your views here.
class Tour_View_Set(viewsets.ModelViewSet):
    queryset = Tour.objects.all()
    serializer_class = TourSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        # Назначение текущего пользователя автором тура.
        serializer.save(author = self.request.user)
