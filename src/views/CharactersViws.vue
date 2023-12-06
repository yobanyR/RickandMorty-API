<template>
  <ion-page >
    <!-- Define la estructura de la página usando los componentes de Ionic -->
    <ion-header>
      <ion-toolbar color="success">
        <!-- Título de la barra de herramientas -->
        <ion-title class="title-font">Rick and Morty API</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content >
      <!-- Utiliza el componente 'CharacterList' pasándole la lista de personajes y configurando un evento 'character-click' -->
      <character-list :characters="characters" @character-click="showCharacterDetail" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
// Importa los componentes necesarios de Ionic y Vue
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import RickAndMortyService from '../services/CustomRickAndMortyService';
import CharacterList from '../components/CustomCharacterList.vue';

export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    CharacterList,
  },
  data() {
    return {
      characters: [],
    };
  },
  mounted() {
    RickAndMortyService.fetchCharacters()
      .then(characters => {
        this.characters = characters;
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
      });
  },
  methods: {
    showCharacterDetail(characterId: any) {
      this.$router.push(`/characters/${characterId}`);
    },
  },
});
</script>

<style scoped>
.title-font {
  font-family: 'Pacifico', cursive;
  font-weight: bold;
  font-style: italic;
  font-size: 20px;
  color: white;
}
</style>