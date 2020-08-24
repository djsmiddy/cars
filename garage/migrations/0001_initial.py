# Generated by Django 3.1 on 2020-08-23 06:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='logDescription',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('carID', models.CharField(max_length=200)),
                ('numberPlate', models.CharField(max_length=200)),
                ('make', models.CharField(max_length=200)),
                ('model', models.CharField(blank=True, max_length=200)),
                ('modelType', models.CharField(blank=True, max_length=200)),
                ('vinNumber', models.CharField(blank=True, max_length=200)),
                ('engineNumber', models.CharField(blank=True, max_length=200)),
                ('bodyType', models.CharField(blank=True, max_length=200)),
                ('fuel', models.CharField(blank=True, max_length=200)),
                ('trans', models.CharField(blank=True, max_length=200)),
                ('color', models.CharField(blank=True, max_length=200)),
                ('costPrice', models.CharField(blank=True, max_length=200)),
                ('soldPrice', models.CharField(blank=True, max_length=200)),
                ('lowBookPrice', models.CharField(blank=True, max_length=200)),
                ('lowTradePrice', models.CharField(blank=True, max_length=200)),
                ('boughtFrom', models.CharField(blank=True, max_length=200)),
                ('soldThough', models.CharField(blank=True, max_length=200)),
            ],
        ),
    ]