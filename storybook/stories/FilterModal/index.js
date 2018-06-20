import React, { Component } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import { FilterModal } from '../../../src';

class ModalClass extends Component {
  state = {
    modalVisible: false,
  };

  filters = [
    {
      name: 'PediatricsPediatricsPediatricsPediatricsPediatricsPediatricsPediatricsPediatrics',
      value: true,
    },
    { name: 'Plastic Surgery', value: false },
    { name: 'Gynecologist', value: false },
    { name: 'Cardiac Surgery', value: false },
    { name: 'Pediatrics', value: true },
    { name: 'Plastic Surgery', value: false },
    { name: 'Gynecologist', value: false },
    { name: 'Cardiac Surgery', value: false },
    { name: 'Pediatrics', value: true },
    { name: 'Plastic Surgery', value: false },
    { name: 'Gynecologist', value: false },
    { name: 'Cardiac Surgery', value: false },
    { name: 'Pediatrics', value: true },
    { name: 'Plastic Surgery', value: false },
    { name: 'Gynecologist', value: false },
    { name: 'Cardiac Surgery', value: false },
    { name: 'Pediatrics', value: true },
    { name: 'Plastic Surgery', value: false },
    { name: 'Gynecologist', value: false },
    { name: 'Cardiac Surgery', value: false },
  ];

  handleClose = (filters) => {
    console.log(filters);
    this.setState({ modalVisible: false });
  };

  render() {
    return (
      <View>
        <FilterModal
          modalVisible={this.state.modalVisible}
          title="Specialties"
          filters={this.filters}
          closeModal={this.handleClose}
        />
        <TouchableHighlight
          onPress={() => {
            this.setState({ modalVisible: true });
          }}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

storiesOf('FilterModal', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <ModalClass />);
