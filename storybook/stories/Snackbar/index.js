import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import { Snackbar } from '../../../src';

storiesOf('Snackbar', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <Snackbar text="sarasa" position="top" type="rounded" />);
