import React from 'react';

import { View } from 'react-native';
import { array, func, object, bool, oneOfType, string, number } from 'prop-types';

import Option from '../Option/Option';

const propTypes = {
  iconRight: bool,
  spaced: bool,
  style: object,
  options: array.isRequired,
  iconStyles: object,
  labelStyles: object,
  onChange: func,
  selected: oneOfType([string, number]),
};

const defaultProps = {
  iconRight: false,
  spaced: false,
  style: {},
  onChange: () => null,
  iconStyles: {},
  labelStyles: {},
  selected: -1,
};

class OptionGroup extends React.Component {
  state = {
    selected: this.props.selected || -1,
  };

  handlePress = (selected, id) => {
    if (selected) {
      this.setState({ selected: id });
      this.props.onChange(id);
    }
  };
  render() {
    console.warn(this.props.selected);
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
            style={this.props.style}
            spaced={this.props.spaced}
            iconRight={this.props.iconRight}
            optionGroup
          />
        ))}
      </View>
    );
  }
}
OptionGroup.propTypes = propTypes;
OptionGroup.defaultProps = defaultProps;

export default OptionGroup;
