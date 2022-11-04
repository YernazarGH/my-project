from django.contrib import admin

# Register your models here.
from .models import Tariff, UsedResources, UserInfo, Review

admin.site.register(Tariff)
admin.site.register(UsedResources)
admin.site.register(UserInfo)
admin.site.register(Review)
