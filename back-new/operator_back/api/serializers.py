from django.contrib.auth.models import User
from django.conf import settings
from rest_framework import serializers

from .models import Tariff, UserInfo, UsedResources, Review

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = settings.AUTH_USER_MODEL
        fields = ['id']

class UserSerializer2(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class TariffSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tariff
        fields = '__all__'

class UsedResourcesSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsedResources
        fields = '__all__'

class UserInfoSerializer(serializers.ModelSerializer):
    tariff = TariffSerializer(read_only=True)
    used_resources = UsedResourcesSerializer(read_only=True)

    class Meta:
        model = UserInfo
        fields = ['tariff', 'used_resources']

class ReviewSerializer(serializers.ModelSerializer):
    tariff = TariffSerializer(read_only=True)
    class Meta:
        model = Review
        fields = '__all__'

    # def create(self, validated_data):
    #     review = Review.objects.create(
    #         user_name=validated_data.get('user_name'),
    #         text=validated_data.get('text'),
    #         tariff_id=validated_data.get('tariff')
    #     )
    #     return review
