import { faSun, faMoon, faCloudRain, faCloudShowersHeavy, faWind, faSmog, faCloud, faCloudSun, faCloudMoon, faBolt } from '@fortawesome/free-solid-svg-icons';
import { faSnowflake } from '@fortawesome/free-regular-svg-icons';

export const weatherIcons = {
  'clear-day': faSun,
  'clear-night': faMoon,
  rain: faCloudShowersHeavy,
  snow: faSnowflake,
  sleet: faCloudRain,
  wind: faWind,
  fog: faSmog,
  cloudy: faCloud,
  'partly-cloudy-day': faCloudSun,
  'partly-cloudy-night': faCloudMoon,
  thunderstorm: faBolt,
};
