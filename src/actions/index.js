// This is an Action Creator
// We use axios for the AJAX request
import axios from 'axios';

const API_KEY = 'a66437ed6ae996440e8cddee3fdc6749';
const URL_ROOT = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${URL_ROOT}&q=${city},ID`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
