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
      <Divider length="short" />
      <Divider length="medium" />
      <Divider length="long" />
    </View>
  ))
  .add('Custom color', () => (
    <View style={styles.wrapper}>
      <Divider color={customColor} />
      <Divider length="short" color={customColor} />
      <Divider length="medium" color={customColor} />
      <Divider length="long" color={customColor} />
    </View>
  ))
  .add('Custom primary color', () => (
    <View style={styles.wrapper}>
      <Divider primaryColor={customPrimaryColor} />
      <Divider length="short" primaryColor={customPrimaryColor} />
      <Divider length="medium" primaryColor={customPrimaryColor} />
      <Divider length="long" primaryColor={customPrimaryColor} />
    </View>
  ))
  .add('Custom colors', () => (
    <View style={styles.wrapper}>
      <Divider color={customColor} primaryColor={customPrimaryColor} />
      <Divider length="short" color={customColor} primaryColor={customPrimaryColor} />
      <Divider length="medium" color={customColor} primaryColor={customPrimaryColor} />
      <Divider length="long" color={customColor} primaryColor={customPrimaryColor} />
    </View>
  ));
