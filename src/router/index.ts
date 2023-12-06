import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/characters',
  },
  {
    path: '/characters',
    name: 'characters',
    component: () => import('@/views/CharactersViws.vue'), 
  },
  {
    path: '/characters/:id',
    name: 'characterDetail',
    component: () => import('@/views/CharacterDetailViews.vue'),  
  },
  {
    path: '/Episodio/:id',
    name: 'Episodio',
    component: () => import('@/views/EpisodioView.vue'),
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
