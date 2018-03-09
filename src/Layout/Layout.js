import React from 'react';
import { array, object, func, oneOfType } from 'prop-types';
import { View, TouchableOpacity } from 'react-native';

const propTypes = {
  /**
   * The prop "children" defines the content that will live inside the component.
   */
  children: oneOfType([array, object]).isRequired,
};

const defaultProps = {};

const pressPropTypes = {
  /**
   * The prop "children" defines the content that will live inside the component.
   */
  children: oneOfType([array, object]).isRequired,
  /**
   * The prop "onPress" makes the component tappable and also is the function to be executed
   * on press.
   */
  onPress: func,
};

const pressDefaultProps = {
  onPress: () => {},
};

/**
 * HoC (High order Component). Receives the props and a type. Depending on the type,
 * it will render a Row or a Col, and depending on the props a View or a TouchableOpacity.
 */
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

/**
 * Row component, uses createChild to render a Row.
 */
const Row = props => createChild(props, 'row');

/**
 * Col component, uses createChild to render a Col.
 */
const Col = props => createChild(props, 'column');

/**
 * Grid component, expects childs, that could be Row or Col components.
 */
const Grid = (props) => {
  const ifRow = () =>
    !!props.children &&
    ((Array.isArray(props.children) && props.children[0].type === Row) ||
      props.children.type === Row);

  const style = {
    flex: 1,
    flexDirection: ifRow() ? 'column' : 'row',
    height: '100%',
    width: '100%',
    ...props.style,
  };

  const renderView = () => <View style={style}>{props.children}</View>;

  renderView.propTypes = propTypes;
  renderView.defaultProps = defaultProps;

  return renderView();
};

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export { Grid, Row, Col };
