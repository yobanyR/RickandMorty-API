<template>
  <!-- Define la estructura de la página usando los componentes de Ionic -->
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <!-- Título de la barra de herramientas -->
        <ion-title>Rick and Morty Characters</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <!-- Utiliza el componente 'CharacterList' pasándole la lista de personajes y configurando un evento 'character-click' -->
      <character-list :characters="characters" @character-click="showCharacterDetail" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
// Importa la función 'defineComponent' de Vue y el servicio 'RickAndMortyService'
import { defineComponent } from 'vue';
import RickAndMortyService from '../services/RickAndMortyService';
// Importa el componente 'CharacterList'
import CharacterList from '../components/CharacterList.vue';

// Exporta un componente de Vue
export default defineComponent({
  components: {
    // Registra el componente 'CharacterList' para ser utilizado en este componente
    CharacterList,
  },
  data() {
    // Define el estado local del componente, en este caso, un array vacío para almacenar los personajes
    return {
      characters: [],
    };
  },
  mounted() {
    // En el evento 'mounted', después de que el componente se ha montado en el DOM...
    RickAndMortyService.getCharacters()
      // ...llama al método 'getCharacters' del servicio 'RickAndMortyService' para obtener la lista de personajes
      .then(characters => {
        // Actualiza el array 'characters' con la respuesta obtenida
        this.characters = characters; 
      })
      // Maneja cualquier error que pueda ocurrir durante la obtención de personajes
      .catch(error => {
        console.error('Error fetching characters:', error);
      });
  },
  methods: {
    // Define un método 'showCharacterDetail' que toma un 'characterId' como parámetro
    showCharacterDetail(characterId: any) {
      // Navega a la ruta '/character/:id' utilizando el enrutador y pasa el 'characterId' como parámetro
      this.$router.push(`/character/${characterId}`);
    },
  },
});
</script>
