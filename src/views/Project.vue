<template>
  <h2>{{title}}</h2>
  <hr>
  <p>{{details}}</p>
</template>


<script>
export default {
  props: ['id'],
  data() {
    return {
      title: '',
      details: '',
    }
  },
  async mounted() {
    const response = await fetch('http://localhost:3000/projects/' + this.id)
    const project = await response.json()
    this.title = project.title
    this.details = project.details
  },
}
</script>

<style>
</style>