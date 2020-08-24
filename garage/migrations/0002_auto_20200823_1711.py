# Generated by Django 3.1 on 2020-08-23 07:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('garage', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='logDescription',
            new_name='carInventory',
        ),
        migrations.CreateModel(
            name='expense',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('expenseID', models.CharField(max_length=200)),
                ('expenseType', models.CharField(max_length=200)),
                ('description', models.CharField(blank=True, max_length=200)),
                ('cost', models.CharField(blank=True, max_length=200)),
                ('acquiredFrom', models.CharField(blank=True, max_length=200)),
                ('date', models.CharField(blank=True, max_length=200)),
                ('carInventory', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='garage.carinventory')),
            ],
        ),
    ]