<template>
  <TopicForm @itemCreated="onTopicCreated"></TopicForm>
  <TopicList :topics="topics"></TopicList>
</template>

<script>
import TopicForm from "@/components/TopicForm";
import TopicList from "@/components/TopicList";
export default {
  name: "TopicForum",
  components: {TopicList, TopicForm},
  data(){
    return {
      topics :[{id:1, title:'t', description:'d', likes:10, dislikes:20}]
    }
  },
  created() {
    fetch("http://127.0.0.1:8000/forum/topics/" )
        .then(res=>res.json())
        .then((data)=>this.topics = data)
  },
  methods:{
    onTopicCreated(topic){
      fetch("http://127.0.0.1:8000/forum/topics/" ,{
        method: 'POST',
        headers:{
          'content-type':"application/json"
        },
        body:JSON.stringify({
          title:topic.title, description:topic.description
        })
      }) .then(res=>res.json())
          .then(data=> this.topics = [data].concat(this.topics));
    }
  }
}
</script>

<style scoped>

</style>