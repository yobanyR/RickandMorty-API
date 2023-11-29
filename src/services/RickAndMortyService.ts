// Importa el módulo 'axios' para realizar solicitudes HTTP.
import axios from 'axios';

// Exporta un objeto con dos métodos asincrónicos para obtener personajes.
export default {
  // Método para obtener todos los personajes.
  async getCharacters() {
    try {
      // Realiza una solicitud GET a la API de Rick and Morty para obtener todos los personajes.
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      // Devuelve solo la propiedad 'results' de la respuesta, que contiene la lista de personajes.
      return response.data.results;
    } catch (error) {
      // En caso de error, registra el error en la consola y lanza una excepción.
      console.error(error);
      throw error;
    }
  },

  // Método para obtener un personaje por su ID.
  async getCharacterById(id: any) {
    try {
      // Realiza una solicitud GET a la API de Rick and Morty para obtener un personaje específico por su ID.
      const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      // Devuelve los datos del personaje específico.
      return response.data;
    } catch (error) {
      // En caso de error, registra el error en la consola y lanza una excepción.
      console.error(error);
      throw error;
    }
  },
};
