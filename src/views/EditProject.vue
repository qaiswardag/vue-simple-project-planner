<template>
  <h1>Edit project</h1>
  <form @submit.prevent="handleSubmit">
    <label>Title</label>
    <input type="text" v-model="title" required autocomplete="off">
    <label>Details</label>
    <textarea v-model="details" required></textarea>
    <button>Edit Project</button>
  </form>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      title: '',
      details: '',
      uri: 'http://localhost:3000/projects/' + this.id,
    }
  },
  async mounted() {
    const response = await fetch(this.uri)
    const data = await response.json()
    this.title = data.title
    this.details = data.details
  },
  methods: {
    async handleSubmit() {
      try {
        await fetch(this.uri, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: this.title, details: this.details }),
        })
        this.$router.push({ name: 'Home' })
      } catch (error) {
        alert('not able to edit project:')
      }
    },
  },
}
</script>

<style>
</style>