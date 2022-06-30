from rest_framework import serializers

from topics.models import Topic, Vote


class TopicSerializer(serializers.ModelSerializer):
    # likes = serializers.IntegerField(read_only=True)
    # dislikes = serializers.IntegerField(read_only=True)
    class Meta:
        model = Topic
        fields = ('id','title', 'description', 'likes', 'dislikes')
        read_only_fields = ('likes', 'dislikes')


class VoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vote
        fields = ('topic', 'vote')
