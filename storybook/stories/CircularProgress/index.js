import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import { CircularProgress } from '../../../src';
import colors from '../styles/colors';

const rainbow = [colors.red, colors.yellow, colors.lightgreen, colors.blueColor];

storiesOf('CircularProgress', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <CircularProgress
      size={220}
      backgroundColor={colors.backgroundLight}
      innerText="7"
      text="Lorem ipsum dolor sit amet."
      textColor={colors.red}
      colors={[colors.red, colors.yellow]}
    />
  ))
  .add('Gray', () => (
    <CircularProgress
      size={220}
      backgroundColor={colors.backgroundLight}
      innerText="0"
      text="This is a gray text."
      textColor={colors.darkgray}
      colors={[colors.darkgray]}
    />
  ))
  .add('No Text', () => (
    <CircularProgress
      size={220}
      backgroundColor={colors.backgroundLight}
      colors={[colors.turquoise, colors.jade]}
    />
  ))
  .add('Rainbow', () => (
    <CircularProgress size={220} backgroundColor={colors.backgroundLight} colors={rainbow} />
  ));
