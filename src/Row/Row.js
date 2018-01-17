import React from 'react';
import { array, func, number, object, oneOfType } from 'prop-types';
import { View, TouchableOpacity } from 'react-native';

import computeProps from '../Utils/computeProps';

const propTypes = {
  size: number,
  children: oneOfType([array, object]),
  style: oneOfType([number, object]),
  onPress: func,
};

const defaultProps = {
  children: null,
  size: null,
  onPress: null,
  style: null,
};

const Row = (props) => {
  const prepareRootProps = () => {
    const style = {
      flex: props.size || (props.style && props.style.height ? 0 : 1),
      flexDirection: 'row',
    };

    const onRenderProps = {
      style,
    };

    return computeProps(props, onRenderProps);
  };

  const renderView = () => <View {...prepareRootProps()}>{props.children}</View>;

  const renderTouchableOpacity = () => (
    <TouchableOpacity onPress={props.onPress} {...prepareRootProps()}>
      {props.children}
    </TouchableOpacity>
  );

  return props.onPress ? renderTouchableOpacity() : renderView();
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
