<template>
  <!-- Define la estructura de la página con un encabezado y contenido -->
  <ion-page>
    <ion-header>
      <!-- Define la barra de herramientas con un título -->
      <ion-toolbar>
        <ion-title>Character Detail</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <!-- Renderiza el componente 'CharacterDetails' y pasa el personaje como propiedad -->
      <character-details :character="character" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
// Importa el servicio RickAndMortyService y el componente CharacterDetails
import RickAndMortyService from '../services/RickAndMortyService';
import CharacterDetails from '../components/CharacterDetails.vue';

export default {
  // Registra el componente 'CharacterDetails' para su uso en este componente
  components: {
    CharacterDetails,
  },
  // Define el estado de datos local para almacenar la información del personaje
  data() {
    return {
      character: {}, // Asegúrate de que este objeto tenga la estructura correcta
    };
  },
  // El gancho 'created' se ejecuta después de que se ha creado la instancia del componente
  async created() {
    try {
      // Obtiene el ID del personaje de los parámetros de la ruta actual
      const characterId = this.$route.params.id;
      // Realiza una solicitud para obtener detalles del personaje mediante el servicio
      const character = await RickAndMortyService.getCharacterById(characterId);
      // Asigna los detalles del personaje al estado de datos local
      this.character = character;
    } catch (error) {
      // Maneja errores durante la obtención de detalles del personaje
      console.error('Error fetching character details:', error);
    }
  },
};
</script>
