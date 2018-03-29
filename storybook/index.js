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
  require('./stories/Checkbox');
  require('./stories/Card');
  require('./stories/ComposedRow');
  require('./stories/Map');
  require('./stories/Layout');
  require('./stories/Option');
  require('./stories/OptionGroup');
  require('./stories/Switch');
  require('./stories/Theme');
  require('./stories/Typography');
  require('./stories/CircularProgress');
}, module);

const StorybookUI = getStorybookUI({ port: 7007, host: 'localhost' });
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUI);
export default StorybookUI;
