<template>
  <ion-list class="character-list" style="background-color: green;" >
      <ion-card v-for="character in characters" :key="character.id" @click="selectCharacter(character.id)" class="character-card"  style="background-color: #ffffdc;">
        <div class="character-content">
          <img :src="character.image" :alt="character.name" class="character-image" />
          <div class="character-details">
            <ion-label class="character-name title-font">{{ character.name }}</ion-label><br>
            <ion-label class="character-details-item title-font">{{ character.species.toUpperCase() }}</ion-label><br> 
            <div class="character-details-row">
              <ion-label class="character-details-item title-font"> {{ character.status }}</ion-label>
              <ion-label class="character-details-item character- title-font"> {{ character.gender }}</ion-label>
            </div>
          </div>
        </div>
      </ion-card>
  </ion-list>
</template>

<script lang="ts">
// Importa la función 'defineComponent' de Vue
import { defineComponent } from 'vue';
import {  IonCard, IonLabel, IonList, } from '@ionic/vue';

// Exporta un componente de Vue
export default defineComponent({
  // Define las propiedades del componente, en este caso, 'characters' que es un array de personajes
  props: {
    characters: {
      type: Array as () => Array<any>,
    },
  },
  components: {
    IonCard,
    IonLabel,
    IonList,
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
.character-list {
  background-size: cover;
}

.character-card {
  width: 90%;
  max-width: 300px;
  margin: 10px auto;
}
.title-font {
  font-family: 'Pacifico', cursive;
  font-weight: bold;
  font-style: italic;
  font-size: 20px;
  color: green;
}

.character-content {
  display: flex;
  align-items: center;
  padding: 10px;
}

.character-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 10px;
}

.character-details {
  flex: 1;
}

.character-name {
  font-weight: bold;
  text-decoration: underline;
  font-size: 1.2em;
}

.character-details-row {
  display: flex;
  justify-content: space-between;
}

.character-details-item {
  display: block;
  margin-top: 5px;
  font-weight: bold;
}

.character-gender {
  text-align: right;
}
</style>

