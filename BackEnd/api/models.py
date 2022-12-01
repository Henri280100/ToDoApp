from django.db import models

# Create your models here.
# pylint: disable=unsubscriptable-object
class Note(models.Model):
    '''Create a Models'''
    title = models.CharField(max_length=120, blank=True)
    body = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    completed = models.BooleanField(default=False)
    my_day= models.BooleanField(default=False)
    important = models.BooleanField(default=False)
    planned = models.BooleanField(default=False)

    def __str__(self):
        return self.body[0:50]
    