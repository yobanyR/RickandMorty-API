import axios from 'axios';

export default {
  async fetchCharacters() {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      return response.data.results;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async fetchCharacterById(id: any) {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async fetchEpisodeById(id: any) {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
