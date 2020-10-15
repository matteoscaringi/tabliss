import colour from './colour';
import giphy from './giphy';
import gradient from './gradient';
import image from './image';
import unsplash from './unsplash';

export const backgroundConfigs = [unsplash, colour, giphy, gradient, image];

backgroundConfigs.sort((a, b) => a.name.localeCompare(b.name));
