from django.contrib import admin
from .models import Note
# Register your models here.


class NoteAdmin(admin.ModelAdmin):
    '''Creating a list to show data'''
    list_display = (
        'title',
        'body',
        'updated',
        'created',
        'completed',
        'my_day',
        'important',
        'planned',
    )

admin.site.register(Note)
