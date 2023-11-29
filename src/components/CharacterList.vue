<template>
  <!-- Utiliza el componente 'ion-list' de Ionic para representar una lista -->
  <ion-list>
    <!-- Utiliza un bucle 'v-for' para iterar sobre cada 'character' en 'characters' -->
    <ion-item v-for="character in characters" :key="character.id" @click="selectCharacter(character.id)">
      <!-- Utiliza el componente 'ion-avatar' para mostrar una imagen de avatar -->
      <ion-avatar>
        <!-- Utiliza la etiqueta 'img' para mostrar la imagen del personaje con la URL proporcionada por 'character.image' y el atributo 'alt' con el nombre del personaje -->
        <img :src="character.image" :alt="character.name" />
      </ion-avatar>
      <!-- Utiliza el componente 'ion-label' para mostrar la etiqueta del personaje -->
      <ion-label>
        <!-- Muestra el nombre del personaje -->
        {{ character.name }}
      </ion-label>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
// Importa la función 'defineComponent' de Vue
import { defineComponent } from 'vue';

// Exporta un componente de Vue
export default defineComponent({
  // Define las propiedades del componente, en este caso, 'characters' que es un array de personajes
  props: {
    characters: {
      type: Array as () => Array<any>, 
    },
  },
  // Define los métodos del componente
  methods: {
    // Define el método 'selectCharacter' que emite un evento 'character-click' con el 'characterId' como parámetro
    selectCharacter(characterId: any) {
      this.$emit('character-click', characterId);
    },
  },
});
</script>
