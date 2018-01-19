import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import CenterView from '../CenterView';
import { Switch } from '../../../src';
import colors from '../styles/colors';

const onPress = () => console.warn('I was pressed'); // eslint-disable-line no-console

storiesOf('Switch', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <View>
      <Switch onPress={onPress} />
      <Switch value onPress={onPress} />
      <Switch disabled onPress={onPress} />
      <Switch disabled value onPress={onPress} />
    </View>
  ))
  .add('Custom color', () => (
    <View>
      <Switch color={colors.customColor} onPress={onPress} />
      <Switch value color={colors.customColor} onPress={onPress} />
      <Switch disabled color={colors.customColor} onPress={onPress} />
      <Switch disabled value color={colors.customColor} onPress={onPress} />
    </View>
  ));
