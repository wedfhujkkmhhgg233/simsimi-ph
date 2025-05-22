const axios = require('axios');

class Sim {
  constructor(apikey) {
    this.apikey = apikey;
  }

  async sim(query) {
    try {
      const response = await axios.get('https://simsimi-api-pro.onrender.com/sim', {
        params: { query, apikey: this.apikey }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching Sim API (Primary):', error.message);

      try {
        const backupResponse = await axios.get('https://simsimi.gleeze.com/sim', {
          params: { query, apikey: this.apikey }
        });
        return backupResponse.data;
      } catch (backupError) {
        console.error('Error fetching Sim API (Backup):', backupError.message);
        throw new Error('Both primary and backup Sim APIs failed');
      }
    }
  }

  async teach(ask, ans) {
    try {
      const response = await axios.get('https://simsimi-api-pro.onrender.com/teach', {
        params: { ask, ans, apikey: this.apikey }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching Teach API (Primary):', error.message);

      try {
        const backupResponse = await axios.get('https://simsimi.gleeze.com/teach', {
          params: { ask, ans, apikey: this.apikey }
        });
        return backupResponse.data;
      } catch (backupError) {
        console.error('Error fetching Teach API (Backup):', backupError.message);
        throw new Error('Both primary and backup Teach APIs failed');
      }
    }
  }
}


module.exports = Sim;
