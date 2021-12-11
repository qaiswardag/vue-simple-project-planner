<template>
  <div class="project" :class="{complete: project.complete}">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">{{project.title}}</h3>
      <div class="icons">
        <router-link :to="{name: 'EditProject', params:{id: project.id}}">

          <span class="material-icons">edit</span>
        </router-link>
        <span @click="deleteProject" class="material-icons">delete</span>
        <span @click="toggleComplete" class="material-icons tick">done</span>
      </div>
    </div>
    <div>
      <p v-if="showDetails">{{project.details}}</p>
    </div>
  </div>
</template>


<script>
export default {
  props: ['project'],
  data() {
    return {
      showDetails: false,
      uri: 'http://localhost:3000/projects/' + this.project.id,
    }
  },
  methods: {
    async deleteProject() {
      try {
        await fetch(this.uri, { method: 'DELETE' })
        this.$emit('delete', this.project.id)
      } catch (error) {
        console.log('server error:', error)
      }
    },
    async toggleComplete() {
      try {
        await fetch(this.uri, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ complete: !this.project.complete }),
        })
        this.$emit('complete', this.project.id)
      } catch (error) {
        console.log('server error:', error)
      }
    },
  },
}
</script>


<style scoped>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #e90074;
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
}
.icons a {
  font-size: 1.6rem;
  line-height: 0;
  letter-spacing: 0;
}
.material-icons {
  font-size: 24px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
}
/* completed projects */
.project.complete {
  border-left: 4px solid #00ce89;
}
.project.complete .tick {
  color: #00ce89;
}
</style>