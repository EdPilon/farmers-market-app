import { ref } from 'vue';
import { getWeatherForecast } from '@/services/weatherApi';

export function useWeather() {
  const forecast = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const fetchWeather = async (location) => {
    loading.value = true;
    error.value = null;
    try {
      forecast.value = await getWeatherForecast(location);
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  return {
    forecast,
    loading,
    error,
    fetchWeather,
  };
}
