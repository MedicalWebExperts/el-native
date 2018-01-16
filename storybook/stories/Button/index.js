import React from 'react';

import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import { Button } from '../../../src';

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <Button />);
