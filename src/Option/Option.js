/* eslint no-console: ["error", { allow: ["error"] }] */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';
import Icon from '../Icon/Icon';

import Theme from '../Theme';

const theme = Theme.getTheme();
const OptionStyles = theme.option;

const propTypes = {
  label: PropTypes.string,
  iconStyles: PropTypes.object,
  labelStyles: PropTypes.object,
  onPress: PropTypes.func,
};

const defaultProps = {
  label: '',
  iconStyles: {},
  labelStyles: {},
  onPress: null,
};

const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

class Option extends Component {
  state = {
    selected: false,
  };
  handlePress = () => {
    this.setState({ selected: !this.state.selected }, () =>
      this.props.onPress(this.state.selected));
  };

  render() {
    let iconName = this.state.selected ? 'md-radio-button-on' : 'md-radio-button-off';
    if (Platform.OS === 'ios') {
      iconName = this.state.selected ? 'ios-radio-button-on' : 'ios-radio-button-off';
    }

    const iconStyles = { ...OptionStyles.icon, ...this.props.iconStyles };
    const labelStyles = { ...OptionStyles.label, ...this.props.labelStyles };

    return (
      <Touchable onPress={this.handlePress}>
        <View style={OptionStyles.default}>
          <Icon name={iconName} style={iconStyles} />
          <Text style={labelStyles}>{this.props.label}</Text>
        </View>
      </Touchable>
    );
  }
}

Option.propTypes = propTypes;
Option.defaultProps = defaultProps;
export default Option;
