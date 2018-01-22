import React, { Component } from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import CenterView from '../CenterView';
import { Checkbox } from '../../../src';
import colors from '../styles/colors';

class CheckboxWrapper extends Component {
  state = { value: false };

  onPress = () => {
    this.setState({ value: !this.state.value });
  };

  render() {
    return (
      <Checkbox color={colors.customColor} checked={this.state.value} onPress={this.onPress} />
    );
  }
}

storiesOf('Checkbox', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <View>
      <Checkbox />
      <Checkbox checked />
    </View>
  ))
  .add('Custom size', () => (
    <View>
      <Checkbox size={120} />
      <Checkbox checked size={120} />
    </View>
  ))
  .add('Custom color', () => <CheckboxWrapper />);
