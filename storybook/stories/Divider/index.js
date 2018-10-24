import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { StyleSheet, View, Dimensions } from 'react-native';

import CenterView from '../CenterView';
import { Divider } from '../../../src';
import colors from '../styles/colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width,
    height: 240,
  },
});

storiesOf('Divider', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <View style={styles.wrapper}>
      <Divider />
      <Divider accentLength="short" />
      <Divider accentLength="medium" />
      <Divider accentLength="long" />
    </View>
  ))
  .add('Custom color', () => (
    <View style={styles.wrapper}>
      <Divider color={colors.darkgray} />
      <Divider accentLength="short" color={colors.darkgray} />
      <Divider accentLength="medium" color={colors.darkgray} />
      <Divider accentLength="long" color={colors.darkgray} />
    </View>
  ))
  .add('Custom primary color', () => (
    <View style={styles.wrapper}>
      <Divider primaryColor={colors.customColor} />
      <Divider accentLength="short" primaryColor={colors.customColor} />
      <Divider accentLength="medium" primaryColor={colors.customColor} />
      <Divider accentLength="long" primaryColor={colors.customColor} />
    </View>
  ))
  .add('Custom colors', () => (
    <View style={styles.wrapper}>
      <Divider color={colors.darkgray} primaryColor={colors.customColor} />
      <Divider accentLength="short" color={colors.darkgray} primaryColor={colors.customColor} />
      <Divider accentLength="medium" color={colors.darkgray} primaryColor={colors.customColor} />
      <Divider accentLength="long" color={colors.darkgray} primaryColor={colors.customColor} />
    </View>
  ));
