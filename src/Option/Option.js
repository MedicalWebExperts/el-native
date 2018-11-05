/* eslint no-console: ["error", { allow: ["error"] }] */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';
import Icon from '../Icon/Icon';

import Theme from '../Theme';

const theme = Theme.getTheme();
const OptionStyles = theme.option;

const propTypes = {
  spaced: PropTypes.bool,
  style: PropTypes.object,
  selected: PropTypes.bool,
  label: PropTypes.string,
  iconStyles: PropTypes.object,
  labelStyles: PropTypes.object,
  onPress: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  iconRight: PropTypes.bool,
  optionGroup: PropTypes.bool,
};

const defaultProps = {
  optionGroup: false,
  spaced: false,
  iconRight: false,
  style: {},
  selected: false,
  label: '',
  iconStyles: {},
  labelStyles: {},
  onPress: null,
  id: 0,
};

const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

class Option extends React.Component {
  state = {
    selected: this.props.selected,
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.selected !== this.state.selected) {
      this.setState({ selected: nextProps.selected });
    }
  }

  changeState = () => {
    this.setState(
      { selected: !this.state.selected },
      () =>
        typeof this.props.onPress === 'function' &&
        this.props.onPress(this.state.selected, this.props.id),
    );
  };

  handleOnPress = () => {
    if (this.props.optionGroup && !this.state.selected) {
      this.changeState();
    }
    if (!this.props.optionGroup) {
      this.changeState();
    }
  };

  render() {
    let iconName = this.state.selected ? 'md-radio-button-on' : 'md-radio-button-off';
    if (Platform.OS === 'ios') {
      iconName = this.state.selected ? 'ios-radio-button-on' : 'ios-radio-button-off';
    }

    let iconStyles = { ...OptionStyles.icon, ...this.props.iconStyles };
    const labelStyles = { ...OptionStyles.label, ...this.props.labelStyles };

    if (this.props.iconRight) {
      iconStyles = { ...iconStyles, ...OptionStyles.iconRight };
    }
    const spaced = this.props.spaced ? { justifyContent: 'space-between' } : {};
    return (
      <Touchable onPress={this.handleOnPress}>
        <View style={[OptionStyles.default, this.props.style, spaced]}>
          {!this.props.iconRight && <Icon name={iconName} style={iconStyles} />}
          <Text style={labelStyles}>{this.props.label}</Text>
          {this.props.iconRight && <Icon name={iconName} style={iconStyles} />}
        </View>
      </Touchable>
    );
  }
}

Option.propTypes = propTypes;
Option.defaultProps = defaultProps;
export default Option;
