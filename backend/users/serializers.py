from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from .models import Custom_User


class Register_Serializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True, validators = [validate_password])
    confirm_password = serializers.CharField(write_only = True)

    class Meta:
        model = Custom_User
        fields = '__all__'

    def validate(self, data):
        if data['password'] != data["confirm_password"]:
            raise serializers.ValidationError({'password': "Пароли должны совпадать."})
        return data

    def create(self, validated_data):
        password = validated_data.pop('password')
        validated_data.pop("confirm_password")
        user = Custom_User(**validated_data)
        user.set_password(password)
        user.save()
        return user


class Custom_User_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Custom_User
        fields = '__all__'
