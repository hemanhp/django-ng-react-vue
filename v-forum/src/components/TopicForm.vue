<template>
  <form>
    Title : <input type="text" name="title" id="title" v-model="title">
    Description : <input type="text" name="description" id="description" v-model="description">
    <input type="button" value="Create" @click.prevent="handleCreate">
  </form>
</template>

<script>
export default {
  name: "TopicForm",
  data(){
    return {title:'', description:''}
  },
  methods:{
    handleCreate(){
      this.$emit('itemCreated', {title:this.title, description:this.description})
    }
  }
}
</script>

<style scoped>

</style>