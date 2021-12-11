<template>
  <form @submit.prevent="handleSubmit">
    <label>Title</label>
    <input type="text" v-model="title" required autocomplete="off">
    <label>Details</label>
    <textarea v-model="details" required></textarea>
    <button>Add Project</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      details: '',
    }
  },
  methods: {
    async handleSubmit() {
      let project = {
        title: this.title,
        details: this.details,
        complete: false,
      }
      try {
        await fetch('http://localhost:3000/projects', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(project),
        })
        this.$router.push({ name: 'Home' })
      } catch (error) {
        alert('not able to add project')
      }
    },
  },
}
</script>


<style>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
  font-family: inherit;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
  font-family: inherit;
}
form button {
  display: block;
  margin: 20px auto 0;
  padding: 1rem 2rem;
  background: #00ce89;
  color: #fff;
  border-radius: 3rem;
  font-weight: bold;
  border: none;
  font-family: inherit;
  cursor: pointer;
}
</style>