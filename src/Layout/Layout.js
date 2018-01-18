import React from 'react';
import { array, object, oneOfType } from 'prop-types';
import { View, TouchableOpacity } from 'react-native';

const propTypes = {
  children: oneOfType([array, object]).isRequired,
};

const defaultProps = {
  children: null,
};

const createChild = (props, type) => {
  const prepareRootProps = () => {
    const style = {
      flex: props.size || (props.style && props.style.width ? 0 : 1),
      flexDirection: type,
      ...props.style,
    };
    return style;
  };

  const renderView = () => <View style={prepareRootProps()}>{props.children}</View>;

  const renderTouchableOpacity = () => (
    <TouchableOpacity onPress={props.onPress} style={prepareRootProps()}>
      {props.children}
    </TouchableOpacity>
  );

  return props.onPress ? renderTouchableOpacity() : renderView();
};

const Row = props => createChild(props, 'row');
const Col = props => createChild(props, 'column');

const Grid = (props) => {
  const ifRow = () => !!props.children && props.children[0].type === Row;

  const prepareRootProps = () => {
    const style = {
      flex: 1,
      flexDirection: ifRow() ? 'column' : 'row',
      height: '100%',
      width: '100%',
    };
    return style;
  };

  const renderView = () => <View style={prepareRootProps()}>{props.children}</View>;

  return renderView();
};

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export { Grid, Row, Col };
