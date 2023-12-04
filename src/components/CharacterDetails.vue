<template>
    <div v-if="character" class="character-container">
      <!-- Card para la imagen del personaje y el nombre -->
      <ion-card class="name-card">
        <!-- Utiliza 'ion-img' para mostrar la imagen del personaje y centrar el nombre -->
        <ion-img :src="character.image" alt="Character Image" class="character-image"></ion-img>
        <ion-card-content class="ion-text-center">
          <!-- Centra el nombre del personaje debajo de la imagen -->
          <ion-card-title class="white-text">{{ character.name }}</ion-card-title>
        </ion-card-content>
      </ion-card>

      <!-- Texto "PROPERTIES" -->
      <ion-card class="properties-card">
        <ion-card-header>
          <ion-card-title class="ion-text-center white-text">PROPERTIES</ion-card-title>
        </ion-card-header>

        <!-- Cuadros para mostrar la información -->
        <ion-card-content class="icon-card">
          <!-- Género -->
          <ion-item>
            <ion-label>Género</ion-label>
            <ion-badge>{{ character.gender }}</ion-badge>
          </ion-item>

          <!-- Especie -->
          <ion-item>
            <ion-label>Especie</ion-label>
            <ion-badge>{{ character.species }}</ion-badge>
          </ion-item>

          <!-- Estado -->
          <ion-item>
            <ion-label>Estado</ion-label>
            <ion-badge>{{ character.status }}</ion-badge>
          </ion-item>
        </ion-card-content>
      </ion-card>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonCard, IonImg, IonCardContent, IonCardTitle, IonItem, IonLabel, IonBadge, IonCardHeader,   } from '@ionic/vue';

export default defineComponent({
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  components: {
    IonCard,
    IonImg,
    IonCardContent,
    IonCardTitle,
    IonItem,
    IonLabel,
    IonBadge,
    IonCardHeader,
    
  },
});
</script>

<style scoped>
.character-container {
  position: relative;
  background-image: url('/assents/rick.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh; /* Ocupar el 100% de la altura de la pantalla */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.name-card,
.properties-card {
  background-color: rgba(0, 0, 0, 0.7); /* Fondo semitransparente */
  color: white;
}

.white-text {
  color: white;
}

.character-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}


</style>
