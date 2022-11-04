# Generated by Django 4.0.4 on 2022-05-29 20:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_remove_tariff_customer_remove_usedresources_customer_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_name', models.CharField(max_length=100, verbose_name='Имя пользователя')),
                ('text', models.TextField(verbose_name='Текст')),
                ('tariff', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.tariff')),
            ],
        ),
    ]