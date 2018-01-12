import React, { Component } from 'react';
import { array, func, object, oneOfType } from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import computeProps from '../Utils/computeProps';
import Row from '../Row/Row';

export default class Grid extends Component {
  static propTypes = {
    children: oneOfType([array, object]).isRequired,
    onPress: func,
  };

  static defaultProps = {
    children: null,
    onPress: null,
  };

  prepareRootProps() {
    const style = {
      flex: 1,
      flexDirection: this.isRow() ? 'column' : 'row',
    };

    const defaultProps = {
      style,
    };

    return computeProps(this.props, defaultProps);
  }

  isRow = () => {
    let isRow = false;
    React.Children.forEach(this.props.children, (child) => {
      isRow = child && child.type === Row ? isRow : true;
    });
    return isRow;
  };

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
