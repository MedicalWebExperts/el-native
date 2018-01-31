import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import { ComposedRow } from '../../../src';

storiesOf('ComposedRow', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <ComposedRow />);
