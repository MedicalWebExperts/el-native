import React, { Component } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import { FilterModal } from '../../../src';

class ModalClass extends Component {
  state = {
    modalVisible: false,
    filters: [
      { name: 'Pediatrics', value: true },
      { name: 'Plastic Surgery', value: false },
      { name: 'Gynecologist', value: false },
      { name: 'Cardiac Surgery', value: false },
    ],
  };

  updateFilter = (filter, value) => {
    const { filters } = this.state;
    filters[filters.indexOf(filter)].value = value;
    this.setState({
      filters,
    });
  };

  render() {
    return (
      <View>
        <FilterModal
          modalVisible={this.state.modalVisible}
          title="Specialties"
          filters={this.state.filters}
          updateFilter={this.updateFilter}
          closeModal={() => {
            this.setState({ modalVisible: false });
          }}
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
