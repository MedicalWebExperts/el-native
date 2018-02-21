import React from 'react';

import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import { Option } from '../../../src';

storiesOf('Option', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <Option label="option button" />)
  .add('Icon Styled', () => <Option label="option button" iconStyles={{ color: 'red' }} />)
  .add('Label Styled', () => <Option label="option button" labelStyles={{ color: 'red' }} />);
