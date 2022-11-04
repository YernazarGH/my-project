from django.contrib.auth.models import User
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, generics

from .models import Tariff, UserInfo, UsedResources, Review
from .serializers import TariffSerializer, UserInfoSerializer, ReviewSerializer, UserSerializer, UserSerializer2

class AllTariffList(APIView):

    def get(self, request, format=None):
        tariffs = Tariff.objects.all()
        serialized_tariffs = TariffSerializer(tariffs, many=True)
        return Response(serialized_tariffs.data, status=status.HTTP_200_OK)

class TariffList(APIView):

    def get(self, request, format=None):
        tariffs = Tariff.objects.all()
        serialized_tariffs = TariffSerializer(tariffs, many=True)
        return Response(serialized_tariffs.data, status=status.HTTP_200_OK)

class ReviewList(APIView):
    def get(self, request, format=None):
        reviews = Review.objects.all()
        serialized_reviews = ReviewSerializer(reviews, many=True)
        return Response(serialized_reviews.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        try:
            tariff = Tariff.objects.get(id=request.data.get('tariff'))
        except User.DoesNotExist as e:
            return JsonResponse({'error': str(e)})
        review = Review(
            username = request.data.get('username'),
            text = request.data.get('text'),
            tariff = tariff,
        )
        review.save()
        serializer = ReviewSerializer(review)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class UserViewSet(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer2


@api_view(['GET'])
def user_info_by_name(request, name):
    try:
        user = User.objects.get(username=name)
    except User.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    try:
        user_info = UserInfo.objects.get(base_user=user)
    except UserInfo.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    if request.method == 'GET':
        serializer = UserInfoSerializer(user_info)
        return Response(serializer.data)

@api_view(['POST'])
def user_tariff(request, name, tariff_id):
    try:
        user = User.objects.get(username=name)
    except User.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    try:
        tariff = Tariff.objects.get(id=tariff_id)
    except Tariff.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    try:
        user_info = UserInfo.objects.get(base_user=user)
        user_info.used_resources.delete()
    except UserInfo.DoesNotExist as e:
        pass
    new_used_resources = UsedResources(minutes=0, gigabytes=0, sms=0)
    new_used_resources.save()
    new_user_info = UserInfo(base_user=user, used_resources=new_used_resources, tariff=tariff)
    new_user_info.save()
    serializer = UserInfoSerializer(new_user_info)
    return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['POST'])
def user_resources(request, name, minutes, gigabytes, sms):
    try:
        user = User.objects.get(username=name)
    except User.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    try:
        user_info = UserInfo.objects.get(base_user=user)
        tariff = user_info.tariff
        user_info.used_resources.delete()
    except UserInfo.DoesNotExist as e:
        pass
    new_used_resources = UsedResources(minutes=minutes, gigabytes=gigabytes, sms=sms)
    new_used_resources.save()
    new_user_info = UserInfo(base_user=user, used_resources=new_used_resources, tariff=tariff)
    new_user_info.save()
    serializer = UserInfoSerializer(new_user_info)
    return Response(serializer.data, status=status.HTTP_201_CREATED)
