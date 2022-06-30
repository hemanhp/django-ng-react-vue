from django.urls import path

from topics.views import TopicListAPIView,CreateVoteAPIView

urlpatterns = [
    path('topics/', TopicListAPIView.as_view()),
    path('votes/', CreateVoteAPIView.as_view())
]