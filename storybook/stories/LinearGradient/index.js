import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import colors from '../styles/colors';

import CenterView from '../CenterView';
import { LinearGradient } from '../../../src';

const styles = {
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
};
storiesOf('LinearGradient', module)
  .addDecorator(getStory => (
    <CenterView style={{ backgroundColor: colors.backgroundDark }}>{getStory()}</CenterView>
  ))
  .add('Default', () => (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
      <Text>LINEAR GRADIENT</Text>
    </LinearGradient>
  ));
