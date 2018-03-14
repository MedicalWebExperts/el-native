import React, { Component } from 'react';

import { View } from 'react-native';
import { array, func, object } from 'prop-types';

import Option from '../Option/Option';

const propTypes = {
  options: array.isRequired,
  iconStyles: object,
  labelStyles: object,
  onChange: func,
};
const defaultProps = {
  onChange: () => null,
  iconStyles: {},
  labelStyles: {},
};

class OptionGroup extends Component {
  state = {
    selected: -1,
  };
  handlePress = (selected, id) => {
    if (selected) {
      this.setState({ selected: id });
      this.props.onChange(id);
    }
  };
  render() {
    return (
      <View>
        {this.props.options.map(e => (
          <Option
            key={e.id}
            onPress={this.handlePress}
            id={e.id}
            label={e.label}
            selected={this.state.selected === e.id}
            iconStyles={this.props.iconStyles}
            labelStyles={this.props.labelStyles}
          />
        ))}
      </View>
    );
  }
}
OptionGroup.propTypes = propTypes;
OptionGroup.defaultProps = defaultProps;

export default OptionGroup;
