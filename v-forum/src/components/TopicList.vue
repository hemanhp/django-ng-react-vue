<template>
<TopicListItem :topic="topic" v-for="topic in topics" :key="topic.id"></TopicListItem>
</template>

<script>
import TopicListItem from "@/components/TopicListItem";
export default {
  name: "TopicList",
  components: {TopicListItem},
  props:{
    topics:{
      type:Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>