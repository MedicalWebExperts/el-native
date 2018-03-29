import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import { TextThemed, ThemeProvider } from '../../../src';

const blueTheme = {
  color: '#0000FF',
};
const greyTheme = {
  color: '#888',
};

storiesOf('Theme', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Blue Theme', () => (
    <ThemeProvider theme={blueTheme}>
      <TextThemed text="test test" />
    </ThemeProvider>
  ))
  .add('Grey Theme', () => (
    <ThemeProvider theme={greyTheme}>
      <TextThemed text="test test" />
    </ThemeProvider>
  ));
