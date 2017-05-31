import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import './storybook/addons';

// import your stories
configure(() => {
  require('./storybook');
}, module);

const StorybookUI = getStorybookUI({ port: 7007, host: 'localhost' });
AppRegistry.registerComponent('elnative', () => StorybookUI);
