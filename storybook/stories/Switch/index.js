import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import CenterView from '../CenterView';
import { Switch } from '../../../src';

const customColor = 'aquamarine';
const onPress = () => console.warn('I was pressed');

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
      <Switch color={customColor} onPress={onPress} />
      <Switch value color={customColor} onPress={onPress} />
      <Switch disabled color={customColor} onPress={onPress} />
      <Switch disabled value color={customColor} onPress={onPress} />
    </View>
  ));
