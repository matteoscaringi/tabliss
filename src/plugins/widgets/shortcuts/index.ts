import { Config } from '../../types';
import Shortcuts from './Shortcuts';
import ShortcutsSettings from './ShortcutsSettings';

const config: Config = {
  key: 'widget/shortcuts',
  name: 'Shortcuts',
  description: 'Have your shortcuts always everywhere!',
  dashboardComponent: Shortcuts,
  settingsComponent: ShortcutsSettings,
};

export default config;
