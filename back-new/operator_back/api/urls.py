from django.urls import path
# from rest_framework_jwt.views import obtain_jwt_token
from rest_framework.authtoken.views import ObtainAuthToken
from .views import TariffList, user_info_by_name, user_tariff, ReviewList, UserViewSet, user_resources

urlpatterns = [
    path('auth/', ObtainAuthToken.as_view()),
    path('tariffs/', TariffList.as_view()),
    path('tariffs/<str:name>/<int:tariff_id>/',user_tariff),
    path('users/',UserViewSet.as_view()),
    path('users/<str:name>/',user_info_by_name),
    path('users/<str:name>/<int:minutes>/<int:gigabytes>/<int:sms>/',user_resources),
    path('reviews/',ReviewList.as_view()),


]
