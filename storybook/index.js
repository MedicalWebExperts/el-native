/* eslint-disable */

import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

// import stories
configure(() => {
  require('./stories/Map');
  require('./stories/Button');
  require('./stories/Typography');
}, module);

const StorybookUI = getStorybookUI({ port: 7007, host: 'localhost' });
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUI);
export default StorybookUI;
