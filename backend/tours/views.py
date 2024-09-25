from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Tour
from .serializers import Tour_Serializer
from .permissions import Is_Author_Or_Read_Only


class Tour_View_Set(viewsets.ModelViewSet):
    queryset = Tour.objects.all()
    serializer_class = Tour_Serializer
    # Любой может просматривать, но только авторы могут редактировать.
    permission_classes = [IsAuthenticatedOrReadOnly, Is_Author_Or_Read_Only]  
    
    def perform_create(self, serializer):
        # Автор тура будет текущим пользователем.
        serializer.save(author = self.request.user)