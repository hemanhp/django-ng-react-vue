from django.contrib import admin

# Register your models here.
from topics.models import Topic, Vote

admin.site.register(Topic)
admin.site.register(Vote)