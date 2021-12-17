<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current"></FilterNav>
    <div v-if="projects.length">
      <!-- <div v-for="project in projects" :key="project.id"> -->
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete"></SingleProject>
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from '../components/SingleProject.vue'
import FilterNav from '../components/FilterNav.vue'
export default {
  components: { SingleProject, FilterNav },
  data() {
    return {
      projects: [],
      uri: 'http://localhost:3000/projects',
      current: 'all',
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
  computed: {
    filteredProjects() {
      if (this.current === 'completed') {
        return this.projects.filter((project) => project.complete)
      }
      if (this.current === 'ongoing') {
        return this.projects.filter((project) => !project.complete)
      }
      return this.projects
    },
  },
}
</script>