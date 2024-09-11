from django.shortcuts import render
from rest_framework import viewsets, generics
from rest_framework.permissions import AllowAny
from django.contrib.auth import get_user_model
from .serializers import Register_Serializer, Custom_User_Serializer

# Create your views here.
USER = get_user_model()


class Register_View(generics.CreateAPIView):
    queryset = USER.objects.all()
    serializer_class = Register_Serializer
    permission_classes = [AllowAny]


class User_Detail_View(generics.RetrieveUpdateAPIView):
    queryset = USER.objects.all()
    serializer_class = Custom_User_Serializer
    permission_classes = [AllowAny]


class User_View_Set(viewsets.ModelViewSet):
    queryset = USER.objects.all()
    serializer_class = Custom_User_Serializer
