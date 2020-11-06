import css from './css';
import js from './js';
import search from './search';
import time from './time';
import weather from './weather';
import shortcuts from './shortcuts';

export const widgetConfigs = [
  css,
  search,
  time,
  weather,
  shortcuts,
];

if (process.env.BUILD_TARGET === 'web') {
  widgetConfigs.push(js);
}

widgetConfigs.sort((a, b) => a.name.localeCompare(b.name));
