<template>
    <div class="character-container">
        <div class="episode-view ">
        <div class="episode-details">
            <h4 class="title-font">Detalles del Episodio</h4>
            <div v-if="EpisodioR">
                <p class="title-font"><strong >Nombre:</strong> {{ EpisodioR.name }}</p>
                <p class="title-font"><strong class="title-font">Fecha de emisión:</strong> {{ EpisodioR.air_date }}</p>
            </div>
            <div v-else>
                <p class="title-font">No hay detalles disponibles para este episodio.</p>
            </div>
        </div>

        <div class="trailer">
            <h4 class="title-font">Trailer</h4>
            <div v-if="EpisodioR && EpisodioR.characters && EpisodioR.characters.length > 0">
                <Youtube :src="EpisodioR.characters[0]" :playerVars="{ autoplay: 1 }" width="100%" height="200" />
            </div>
            <div v-else>
                <p class="title-font">No hay trailers disponibles.</p>
            </div>
        </div>
        <button @click="goToHome" class="cssbuttons-io-button">
            Regresar
            <div class="icon">
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"></path>
                </svg>
            </div>
        </button>

    </div>
    </div>
</template>
  
<script >
import RickAndMortyService from '../services/CustomRickAndMortyService';
import { useRoute } from 'vue-router';
import Youtube from 'vue3-youtube';

export default {
    name: 'EpisodioView',
    components: {
        Youtube,
    },
    data() {
        return {
            id: '',
            EpisodioR: null,
        };
    },
    methods: {
        goToHome() {
            this.$router.push('/');
        },
    },
    async created() {
        const route = useRoute();
        this.id = route.params.id;
        try {
            this.EpisodioR = await RickAndMortyService.fetchEpisodeById(this.id);
            console.log(this.EpisodioR);
        } catch (error) {
            console.error('Error al obtener detalles del episodio:', error);
        }
    },
};
</script>
  
<style scoped>
.episode-view {
    padding: 15px;
    box-sizing: border-box;
}
.title-font {
  font-family: 'Pacifico', cursive;
  font-weight: bold;
  font-style: italic;
  font-size: 16px;
  color: white;
}
.character-container {
  position: relative;
  background-image: url('/assents/fondo3.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh; /* Ajusta la altura al 100% del viewport */
  margin: 0; /* Elimina el margen predeterminado del cuerpo del documento */
  display: flex;
  flex-direction: column;
  align-items: center;
}
.episode-details,
.trailer {
    margin-bottom: 20px;
}

.episode-details p,
.trailer p {
    margin: 0;
}

.trailer iframe {
    border: 1px solid #ddd;
    /* Añade un borde al reproductor de YouTube */
}

.cssbuttons-io-button {
    background: #0625d8;
    color: white;
    font-family: inherit;
    padding: 0.35em;
    padding-left: 1.2em;
    font-size: 17px;
    font-weight: 500;
    border-radius: 0.9em;
    border: none;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    box-shadow: inset 0 0 1.6em -0.6em #714da6;
    overflow: hidden;
    position: relative;
    height: 2.8em;
    padding-right: 3.3em;
    cursor: pointer;
}

.cssbuttons-io-button .icon {
    background: white;
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.2em;
    width: 2.2em;
    border-radius: 0.7em;
    box-shadow: 0.1em 0.1em 0.6em 0.2em #1806e4;
    right: 0.3em;
    transition: all 0.3s;
}

.cssbuttons-io-button:hover .icon {
    width: calc(100% - 0.6em);
}

.cssbuttons-io-button .icon svg {
    width: 1.1em;
    transition: transform 0.3s;
    color: #4c08b3;
}

.cssbuttons-io-button:hover .icon svg {
    transform: translateX(0.1em);
}

.cssbuttons-io-button:active .icon {
    transform: scale(0.95);
}
</style>
  ../services/CustomRickAndMortyService