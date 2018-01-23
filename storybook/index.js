/* eslint-disable */

/* */
import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

// import stories
configure(() => {
  require('./stories/Map');
  require('./stories/Button');
  require('./stories/Layout');
  require('./stories/Typography');
  require('./stories/Avatar');
  require('./stories/Switch');
  require('./stories/Divider');
  require('./stories/Icon');
  require('./stories/Checkbox');
}, module);

const StorybookUI = getStorybookUI({ port: 7007, host: 'localhost' });
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUI);
export default StorybookUI;
