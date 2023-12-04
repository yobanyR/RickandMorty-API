<template>
  <!-- Define la estructura de la página con un encabezado y contenido -->
  <ion-page>
    <ion-header>
      <!-- Define la barra de herramientas con un título y botón de regreso -->
      <ion-toolbar color="dark">
        <ion-title class="title-font">Character Detail</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <!-- Renderiza el componente 'CharacterDetails' y pasa el personaje como propiedad -->
      <character-details :character="character" />
      <!-- Botón de regreso -->
    </ion-content>
    <ion-button @click="goToHome" color="primary">Regresar</ion-button>
  </ion-page>
</template>

<script lang="ts">
import { IonTitle, IonToolbar, IonPage, IonHeader, IonContent, IonButton } from "@ionic/vue";

// Importa el servicio RickAndMortyService y el componente CharacterDetails
import RickAndMortyService from '../services/RickAndMortyService';
import CharacterDetails from '../components/CharacterDetails.vue';

export default {
  components: {
    IonTitle,
    IonToolbar,
    IonPage,
    IonHeader,
    IonContent,
    CharacterDetails,
    IonButton,

  },

  // Define el estado de datos local para almacenar la información del personaje
  data() {
    return {
      character: {}, // Asegúrate de que este objeto tenga la estructura correcta
    };
  },
  methods: {
    goToHome() {
      this.$router.push('/'); // Reemplaza '/home' con la ruta de inicio que desees
    },
  },
  // El gancho 'created' se ejecuta después de que se ha creado la instancia del componente
  async created() {
    try {
    const characterId = this.$route.params.id;
    const character = await RickAndMortyService.getCharacterById(characterId);

    if (character) {
      this.character = character;
      console.log(this.character);
    } else {
      console.error('Character not found');
    }
  } catch (error) {
    console.error('Error fetching character details:', error);
  }
  },

};
</script>

<style scoped>
.title-font {
  font-family: 'Pacifico', cursive;
  font-weight: bold;
  font-style: italic;
  font-size: 25px;
  /* Ajusta el tamaño del título según tus preferencias */
  color: white;
  /* Cambia el color del texto a blanco */
}

.custom-back-button {
  border: 1px solid white;
  /* Ajusta el grosor del borde */
  border-radius: 15px;
  /* Ajusta el radio de borde para hacerlo más pequeño y redondeado */
  padding: 4px;
  /* Ajusta el relleno para hacer el botón más pequeño */
}

/* Estilo para el botón de regreso */
.back-button {
  align-self: flex-end;
  /* Posiciona el botón al final del contenedor (parte inferior) */
  margin: 16px;
}</style>
