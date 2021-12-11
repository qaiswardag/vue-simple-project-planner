<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete"></SingleProject>
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from '../components/SingleProject.vue'
export default {
  components: { SingleProject },
  data() {
    return {
      projects: [],
      uri: 'http://localhost:3000/projects',
    }
  },
  async mounted() {
    const response = await fetch(this.uri)
    const data = await response.json()
    this.projects = data
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => {
        return project.id !== id
      })
    },
    handleComplete(id) {
      let p = this.projects.find((project) => {
        return project.id === id
      })
      p.complete = !p.complete
    },
  },
}
</script>
