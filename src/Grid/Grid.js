import React from 'react';
import { array, object, oneOfType } from 'prop-types';
import { View } from 'react-native';

import Row from '../Row/Row';

const propTypes = {
  children: oneOfType([array, object]).isRequired,
};

const defaultProps = {
  children: null,
};

const Grid = (props) => {
  const ifRow = (child) => {
    let isRow = false;
    if (child && child.type === Row) isRow = true;
    return isRow;
  };

  const prepareRootProps = (child) => {
    const style = {
      flex: 1,
      flexDirection: ifRow(child) ? 'row' : 'column',
    };
    return style;
  };

  const renderView = () =>
    props.children &&
    props.children.length > 1 &&
    props.children.map(child => (
      <View key={props.children.indexOf(child)} {...prepareRootProps(child)}>
        {child}
      </View>
    ));

  return renderView();
};

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default Grid;
