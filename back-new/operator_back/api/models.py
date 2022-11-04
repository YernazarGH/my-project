from django.db import models
from django.conf import settings

# Create your models here.

class Tariff(models.Model):
    name = models.CharField(
        max_length=100,
        null=False,
        blank=False,
        verbose_name='Название тарифа',
    )
    minutes = models.IntegerField(
        null=False,
        blank=False,
        verbose_name='Количество минут в секундах',
    )
    gigabytes = models.IntegerField(
        null=False,
        blank=False,
        verbose_name='Количество гигабайт в мегабайтах',
    )
    sms = models.IntegerField(
        null=False,
        blank=False,
        verbose_name='Количество СМС',
    )
    price = models.IntegerField(
        null=False,
        blank=False,
        verbose_name='Цена',
    )

class UsedResources(models.Model):
    minutes = models.IntegerField(
        null=False,
        blank=False,
        verbose_name='Количество использованных минут в секундах',
    )
    gigabytes = models.IntegerField(
        null=False,
        blank=False,
        verbose_name='Количество использованных гигабайт в мегабайтах',
    )
    sms = models.IntegerField(
        null=False,
        blank=False,
        verbose_name='Количество использованных СМС',
    )

class UserInfo(models.Model):
    base_user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    tariff = models.ForeignKey(Tariff, on_delete=models.CASCADE)
    used_resources = models.OneToOneField(
        UsedResources,
        on_delete=models.CASCADE,
    )

class Review(models.Model):
    username = models.CharField(
        max_length=100,
        null=False,
        blank=False,
        verbose_name='Имя пользователя',
    )
    text = models.TextField(verbose_name="Текст")
    tariff = models.ForeignKey(Tariff, on_delete=models.CASCADE)
