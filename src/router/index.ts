// Importa funciones y tipos necesarios de @ionic/vue-router y vue-router
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

// Define la configuración de las rutas como un array de objetos RouteRecordRaw
const routes: Array<RouteRecordRaw> = [
  {
    // Ruta raíz redirige a '/characters'
    path: '/',
    redirect: '/characters',
  },
  {
    // Ruta '/characters' con nombre 'characters', carga el componente 'CharactersViws.vue'
    path: '/characters',
    name: 'characters',
    component: () => import('@/views/CharactersViws.vue'), 
  },
  {
    // Ruta dinámica '/character/:id' con nombre 'characterDetail', carga el componente 'CharacterDetailViews.vue'
    path: '/characters/:id',
    name: 'characterDetail',
    component: () => import('@/views/CharacterDetailViews.vue'),
  },
];

// Crea una instancia del enrutador con la configuración de rutas y tipo de historial web
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Exporta la instancia del enrutador para que pueda ser utilizada en la aplicación
export default router;
