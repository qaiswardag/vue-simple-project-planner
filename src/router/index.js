import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AddProject from '../views/AddProject.vue';
import EditProject from '../views/EditProject.vue';
import Project from '../views/Project.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add',
    name: 'AddProject',
    component: AddProject,
  },
  {
    path: '/projects/:id',
    name: 'EditProject',
    component: EditProject,
    props: true,
  },
  {
    path: '/project/:id',
    name: 'Project',
    component: Project,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
