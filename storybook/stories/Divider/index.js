import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { StyleSheet, View, Dimensions } from 'react-native';

import CenterView from '../CenterView';
import { Divider } from '../../../src';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width,
    height: 240,
  },
});

const customColor = 'darkgray';
const customPrimaryColor = 'aquamarine';

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
      <Divider color={customColor} />
      <Divider accentLength="short" color={customColor} />
      <Divider accentLength="medium" color={customColor} />
      <Divider accentLength="long" color={customColor} />
    </View>
  ))
  .add('Custom primary color', () => (
    <View style={styles.wrapper}>
      <Divider primaryColor={customPrimaryColor} />
      <Divider accentLength="short" primaryColor={customPrimaryColor} />
      <Divider accentLength="medium" primaryColor={customPrimaryColor} />
      <Divider accentLength="long" primaryColor={customPrimaryColor} />
    </View>
  ))
  .add('Custom colors', () => (
    <View style={styles.wrapper}>
      <Divider color={customColor} primaryColor={customPrimaryColor} />
      <Divider accentLength="short" color={customColor} primaryColor={customPrimaryColor} />
      <Divider accentLength="medium" color={customColor} primaryColor={customPrimaryColor} />
      <Divider accentLength="long" color={customColor} primaryColor={customPrimaryColor} />
    </View>
  ));
