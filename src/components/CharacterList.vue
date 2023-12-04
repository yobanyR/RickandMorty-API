<template>
    <!-- Utiliza el componente 'ion-list' de Ionic para representar una lista -->
    <ion-list class="character-list">
      <!-- Utiliza un bucle 'v-for' para iterar sobre cada 'character' en 'characters' -->
      <ion-item v-for="character in characters" :key="character.id" @click="selectCharacter(character.id)">
        <!-- Utiliza el componente 'ion-card' para representar cada elemento de la lista -->
        <ion-card class="character-card">
          <!-- Utiliza el componente 'ion-avatar' para mostrar una imagen de avatar -->
          <ion-avatar class="character-avatar">
            <!-- Utiliza la etiqueta 'img' para mostrar la imagen del personaje con la URL proporcionada por 'character.image' y el atributo 'alt' con el nombre del personaje -->
            <img :src="character.image" :alt="character.name" />
          </ion-avatar>
          <!-- Utiliza el componente 'ion-card-content' para el contenido del card -->
          <ion-card-content>
            <!-- Utiliza el componente 'ion-label' para mostrar la etiqueta del personaje -->
            <!-- Muestra el nombre del personaje -->
            <ion-label>{{ character.name }}</ion-label>
          </ion-card-content>
        </ion-card>
      </ion-item>
    </ion-list>
</template>

<script lang="ts">
// Importa la función 'defineComponent' de Vue
import { defineComponent } from 'vue';
import { IonItem, IonCard, IonAvatar, IonLabel, IonList, IonCardContent, } from '@ionic/vue';

// Exporta un componente de Vue
export default defineComponent({
  // Define las propiedades del componente, en este caso, 'characters' que es un array de personajes
  props: {
    characters: {
      type: Array as () => Array<any>,
    },
  },
  components: {
    IonItem,
    IonCard,
    IonAvatar,
    IonLabel,
    IonList,
    IonCardContent,
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

<style scoped>
/* Estilos para ajustar el tamaño de la tarjeta y el avatar */
.character-list {
  background-size: cover;
}

.character-card {
  width: 90%;
  /* Ajusta el ancho de la tarjeta según tus preferencias */
  max-width: 400px;
  /* Establece un ancho máximo para evitar que la tarjeta sea demasiado ancha */
  margin: 10px auto;
  /* Ajusta el margen para separar las tarjetas */
  display: flex;
  /* Establece el contenedor de tarjeta como un contenedor flexible */
  align-items: center;
  /* Centra verticalmente los elementos dentro del contenedor flexible */
}

.character-avatar {
  width: 80px;
  /* Ajusta el tamaño del avatar según tus preferencias */
  height: 80px;
  margin-right: 10px;
  /* Ajusta el margen entre el avatar y el texto del nombre */
}</style>
