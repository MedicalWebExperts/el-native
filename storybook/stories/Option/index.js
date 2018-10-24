import React from 'react';

import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import { Option } from '../../../src';

storiesOf('Option', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <Option label="option button" />)
  .add('Icon Styled', () => <Option label="option button" iconStyles={{ color: 'red' }} />)
  .add('Icon Right', () => <Option label="option button" iconRight />)
  .add('Spaced', () => <Option label="option button" spaced />)
  .add('Spaced Right', () => <Option label="option button" iconRight spaced />)
  .add('Label Styled', () => <Option label="option button" labelStyles={{ color: 'red' }} />);
