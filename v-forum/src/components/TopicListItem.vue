<template>
  <div>
    <h4>{{item.title}}</h4>
    <h5>{{item.description}}</h5>
    <p @click="handleLike">{{item.likes}} Likes</p>
    <p @click="handleDislikes">{{item.dislikes}} Dislikes</p>
    <hr/>
  </div>
</template>

<script>
export default {
  name: "TopicListItem",
  props:{
    topic:{
      type: Object,
      required: true
    }
  },
  data (){
    return {
      item : this.topic
    }
  },
  methods:{
    handleLike() {
      fetch("http://127.0.0.1:8000/forum/votes/" ,{
        method: 'POST',
        headers:{
          'content-type':"application/json"
        },
        body:JSON.stringify({
          topic:this.topic.id, vote:'l'
        })
      }).then(res=>res.json())
          .then(()=> this.item.likes++)
    },
    handleDislikes(){
      fetch("http://127.0.0.1:8000/forum/votes/" ,{
        method: 'POST',
        headers:{
          'content-type':"application/json"
        },
        body:JSON.stringify({
          topic:this.topic.id, vote:'d'
        })
      }) .then(res=>res.json())
          .then(()=> this.item.dislikes++)
    }
  }
}
</script>

<style scoped>

</style>