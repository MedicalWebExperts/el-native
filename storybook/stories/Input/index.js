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
  .add('Squared', () => <Input placeholder="Enter yout name" type="squared" />)
  .add('Rounded', () => <Input placeholder="Enter yout name" type="rounded" />)
  .add('Text Area', () => (
    <Input placeholder="Text Area" multiline numberOfLines={8} type="rounded" />
  ))
  .add('Error default', () => <Input placeholder="Text here" error errorText="Error" />)
  .add('Error Squared', () => (
    <Input placeholder="Text here" error errorText="Error" type="squared" />
  ))
  .add('Error Rounded', () => (
    <Input placeholder="Text here" error errorText="Error" type="rounded" />
  ));
