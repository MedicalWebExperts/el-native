import React, { Component } from 'react';

import { array, func, number, object, oneOfType } from 'prop-types';
import { View, TouchableOpacity } from 'react-native';

import computeProps from '../Utils/computeProps';

export default class Col extends Component {
  static propTypes = {
    size: number,
    children: oneOfType([array, object]),
    style: oneOfType([number, object]),
    onPress: func,
  };

  static defaultProps = {
    children: null,
    size: null,
    onPress: null,
    style: null,
  };

  prepareRootProps() {
    const componentStyle = {
      flex: this.props.size || (this.props.style && this.props.style.width ? 0 : 1),
      flexDirection: 'column',
    };

    const defaultProps = {
      style: componentStyle,
    };

    return computeProps(this.props, defaultProps);
  }

  renderView = () => (
    <View {...this.props} {...this.prepareRootProps()}>
      {this.props.children}
    </View>
  );

  renderTouchableOpacity = () => (
    <TouchableOpacity onPress={this.props.onPress} {...this.prepareRootProps()}>
      {this.renderView()}
    </TouchableOpacity>
  );

  render() {
    return this.props.onPress ? this.renderTouchableOpacity() : this.renderView();
  }
}
