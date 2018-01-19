import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import { Input } from '../../../src';
import colors from '../styles/colors';

storiesOf('Input', module)
  .addDecorator(getStory => (
    <CenterView style={{ backgroundColor: colors.backgroundDark }}>{getStory()}</CenterView>
  ))
  .add('Default', () => <Input />)
  .add('Custom color', () => <Input size={200} color={colors.customColor} />)
  .add('Custom size', () => <Input size={150} />)
  .add('Custom Input', () => <Input size={200} name="ios-basketball" />)
  .add('Custom all', () => <Input name="ios-football" size={250} color={colors.customColor} />);
