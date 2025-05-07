import { defineStore } from 'pinia';

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    currentWeather: null,
    forecast: [],
  }),
  actions: {
    async fetchCurrentWeather(location) {
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${location}`);
        const data = await response.json();
        this.currentWeather = data;
      } catch (error) {
        console.error('Error fetching current weather:', error);
      }
    },
    async fetchForecast(location) {
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=${location}&days=7`);
        const data = await response.json();
        this.forecast = data.forecast.forecastday;
      } catch (error) {
        console.error('Error fetching weather forecast:', error);
      }
    },
  },
});