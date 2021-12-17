<template>
  <div class="container">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>



<script>
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar },
}
</script>

<style>
body {
  background: #f2f2f2;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #555;
}
#nav {
  padding: 2rem 2rem;
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 2rem;
}
#nav a {
  padding: 1rem 2rem;
  background: #00ce89;
  color: #fff;
  border-radius: 3rem;
  font-weight: bold;
}
#nav a.router-link-active {
  background: #e90074;
}
</style>