<template>
    <!-- Utiliza la directiva 'v-if' para mostrar el contenido solo si hay un personaje -->
    <div v-if="character">
      <!-- Utiliza el componente 'ion-card' de Ionic para mostrar una tarjeta -->
      <ion-card>
        <!-- Utiliza el componente 'ion-card-content' para el contenido de la tarjeta -->
        <ion-card-content>
          <!-- Utiliza 'ion-card-title' para mostrar el título de la tarjeta con el nombre del personaje -->
          <ion-card-title>{{ character.name }}</ion-card-title>
          <!-- Utiliza 'ion-card-subtitle' para mostrar el subtítulo de la tarjeta con el estado del personaje -->
          <ion-card-subtitle>Status: {{ character.status }}</ion-card-subtitle>
        </ion-card-content>
      </ion-card>
    </div>
  </template>
  
  <script lang="ts">
  // Importa la función 'defineComponent' de Vue
  import { defineComponent } from 'vue';
  
  // Exporta un componente de Vue
  export default defineComponent({
    // Define las propiedades del componente, en este caso, 'character' que es un objeto de personaje requerido
    props: {
      character: {
        type: Object,
        required: true,
      },
    },
  });
  </script>
  