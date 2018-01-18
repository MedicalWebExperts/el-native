import React from 'react';
import { array, object, func, oneOfType } from 'prop-types';
import { View, TouchableOpacity } from 'react-native';

const propTypes = {
  children: oneOfType([array, object]).isRequired,
};

const defaultProps = {
  children: null,
};

const pressPropTypes = {
  children: oneOfType([array, object]).isRequired,
  onPress: func,
};

const pressDefaultProps = {
  children: null,
  onPress: () => {},
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

  renderView.propTypes = propTypes;
  renderView.defaultProps = defaultProps;
  renderTouchableOpacity.propTypes = pressPropTypes;
  renderTouchableOpacity.defaultProps = pressDefaultProps;

  return props.onPress ? renderTouchableOpacity() : renderView();
};

const Row = props => createChild(props, 'row');
const Col = props => createChild(props, 'column');

const Grid = (props) => {
  const ifRow = () => !!props.children && props.children[0].type === Row;

  const style = {
    flex: 1,
    flexDirection: ifRow() ? 'column' : 'row',
    height: '100%',
    width: '100%',
  };

  const renderView = () => <View style={style}>{props.children}</View>;

  renderView.propTypes = propTypes;
  renderView.defaultProps = defaultProps;

  return renderView();
};

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export { Grid, Row, Col };
