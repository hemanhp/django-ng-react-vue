from django.db.models import Count, Q
from django.shortcuts import render

# Create your views here.
from rest_framework.generics import ListAPIView, ListCreateAPIView, CreateAPIView
from .models import Topic, Vote
from .serializers import TopicSerializer, VoteSerializer


class TopicListAPIView(ListCreateAPIView):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer



class CreateVoteAPIView(CreateAPIView):
    queryset = Vote.objects.all()
    serializer_class = VoteSerializer