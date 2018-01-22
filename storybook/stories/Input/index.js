import React from 'react';
import { View, Dimensions } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import { Input } from '../../../src';
import colors from '../styles/colors';

const { width } = Dimensions.get('window');

const customStyle = {
  borderColor: colors.primary,
  width: width / 2,
};

storiesOf('Input', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <Input placeholder="Underline Input" />)
  .add('Default Error', () => <Input placeholder="Underline Input" error />)
  .add('Default custom style', () => (
    <View>
      <Input style={customStyle} placeholder="Underline Input custom styles" />
      <Input style={customStyle} placeholder="Underline Input custom styles" />
      <Input style={customStyle} placeholder="Underline Input custom styles" />
      <Input style={customStyle} placeholder="Underline Input custom styles" />
      <Input style={customStyle} placeholder="Underline Input custom styles" />
      <Input style={customStyle} placeholder="Underline Input custom styles" />
      <Input style={customStyle} placeholder="Underline Input custom styles" />
    </View>
  ))
  .add('Default custom error', () => (
    <Input
      placeholder="Underline Input custom error"
      error
      errorText="This is a custom error text"
    />
  ))
  .add('Text Area', () => <Input placeholder="Text Area" multiline numberOfLines={8} />)
  .add('Squared', () => <Input placeholder="Squared Input" type="squared" />)
  .add('Squared stacked', () => (
    <View>
      <Input placeholder="Squared Input" type="squared" />
      <Input placeholder="Squared Input" type="squared" />
      <Input placeholder="Squared Input" type="squared" />
      <Input placeholder="Squared Input" type="squared" />
      <Input placeholder="Squared Input" type="squared" />
      <Input placeholder="Squared Input" type="squared" />
    </View>
  ))
  .add('Squared Error', () => <Input placeholder="Squared Input" error type="squared" />)
  .add('Rounded', () => <Input placeholder="Rounded Input" type="rounded" />)
  .add('Rounded Error', () => (
    <Input placeholder="Rounded Input" error errorText="Error text" type="rounded" />
  ));
