from rest_framework import serializers
from . models import User


class User_Serializer(serializers.ModelSerializer):
    class Meta:
         model = User
         fields = ['id', 'username', 'email', 'password', 'role']
         extra_kwargs = {'password': {"write_only": True}}
         
         def create(self, validated_data):
            # Созданиие пользователя с хэшированным паролем.
            user = User.objects.create_user(**validated_data)
            return user