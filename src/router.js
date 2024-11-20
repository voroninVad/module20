import {  createWebHistory, createRouter } from 'vue-router';

import MyTask from './components/MyTask.vue';
import AddTask from './components/AddTask.vue';
import SettingsTask from './components/SettingTask.vue';
import EditingTask from './components/EditingTask.vue';

const routes = [
  { path: '/', component: MyTask },
  { path: '/addtask', component: AddTask },
  { path: '/settings', component: SettingsTask },
  { path: '/task/:id/', component: EditingTask },
];

const router = createRouter({
  history: createWebHistory(),
  
  routes,
});

export default router;