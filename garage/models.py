from django.db import models



class carInventory(models.Model):
    carID = models.CharField(max_length=200,)
    numberPlate = models.CharField(max_length=200)
    make = models.CharField(max_length=200)
    model = models.CharField(max_length=200, blank=True)
    modelType = models.CharField(max_length=200, blank=True)
    vinNumber = models.CharField(max_length=200, blank=True)
    engineNumber = models.CharField(max_length=200, blank=True)
    bodyType = models.CharField(max_length=200, blank=True)
    fuel = models.CharField(max_length=200, blank=True)
    trans = models.CharField(max_length=200, blank=True)
    color = models.CharField(max_length=200, blank=True)
    costPrice = models.CharField(max_length=200, blank=True)
    soldPrice = models.CharField(max_length=200, blank=True)
    lowBookPrice = models.CharField(max_length=200, blank=True)
    lowTradePrice = models.CharField(max_length=200, blank=True)
    boughtFrom = models.CharField(max_length=200, blank=True)
    soldThough = models.CharField(max_length=200, blank=True)
    buildDate = models.CharField(max_length=200, blank=True)
    engineSize = models.CharField(max_length=200, blank=True)

class expense(models.Model):

    expenseID = models.CharField(max_length=200)
    expenseType = models.CharField(max_length=200)
    description = models.CharField(max_length=200, blank=True)
    cost = models.CharField(max_length=200, blank=True)
    acquiredFrom = models.CharField(max_length=200, blank=True)
    date = models.CharField(max_length=200, blank=True)
    carInventory = models.ForeignKey(carInventory, on_delete=models.CASCADE)



