/* eslint-disable */

/* */
import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

// import stories
configure(() => {
  require('./stories/Avatar');
  require('./stories/Button');
  require('./stories/Checkbox');
  require('./stories/Divider');
  require('./stories/Icon');
  require('./stories/Input');
  require('./stories/Map');
  require('./stories/Layout');
  require('./stories/Option');
  require('./stories/Switch');
  require('./stories/Typography');
}, module);

const StorybookUI = getStorybookUI({ port: 7007, host: 'localhost' });
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUI);
export default StorybookUI;
