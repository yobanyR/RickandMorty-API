<template>
  <div v-if="character" class="character-container">
    <div class="character-avatar-container">
      <ion-avatar class="character-avatar">
        <ion-img :src="character.image" alt="Character Image" class="character-image"></ion-img>
      </ion-avatar><br>
      <ion-label class="character-name title-font">{{ character.name }}</ion-label><br>
      <h6 class="h title-font">PROPERTIES</h6>
      <!-- Género -->
      <ion-item class="properties-card">
        <ion-label class="character-details-item title-font1">Género:</ion-label>
        <ion-badge class="custom-badge">{{ character.gender }}</ion-badge>
      </ion-item><br>
      <!-- Especie -->
      <ion-item class="properties-card">
        <ion-label class="character-details-item title-font1">Especie:</ion-label>
        <ion-badge class="custom-badge">{{ character.species }}</ion-badge>
      </ion-item><br>
      <!-- Estado -->
      <ion-item class="properties-card">
        <ion-label class="character-details-item title-font1">Estado:</ion-label>
        <ion-badge class="custom-badge">{{ character.status }}</ion-badge>
      </ion-item>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonItem, IonLabel, IonBadge, IonAvatar, IonImg } from '@ionic/vue';

export default defineComponent({
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  components: {
    IonItem,
    IonLabel,
    IonBadge,
    IonAvatar,
    IonImg,
  },

});
</script>

<style scoped>
.character-container {
  position: relative;
  background-image: url('/assents/fondo4.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.episodes-list {
  margin-top: 20px;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  color: blue;
}

.character-avatar-container {
  margin-top: 50px;
}

.character-avatar {
  width: 220px;
  height: 220px;
}

.character-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 70%;
  /* Hace que la imagen sea redonda dentro del avatar */
}

.character-name {
  text-align: center;
  font-size: 2em;
  /* Ajusta el tamaño del nombre según tus preferencias */
  color: white;
}

.h {
  text-align: center;
  color: white;
}

.properties-card {
  background-color: white;
}

.character-details-item {
  display: block;
  font-weight: bold;
}

.title-font {
  font-family: 'Pacifico', cursive;
  font-weight: bold;
  font-style: italic;
  color: white;
}

.title-font1 {
  font-family: 'Pacifico', cursive;
  font-weight: bold;
  font-style: italic;
  color: rgb(20, 26, 132);
}

.icon-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.custom-badge {
  --ion-background-color: #fbfbfb;
}


</style>