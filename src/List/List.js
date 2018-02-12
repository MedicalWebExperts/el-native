import React from 'react';
import { FlatList } from 'react-native';
import { array, func, string, number, oneOfType, node } from 'prop-types';

const propTypes = {
  data: array.isRequired,
  keyExtractor: oneOfType([string, number]),
  ListFooterComponent: node,
  onRefresh: func,
  onEndReached: func,
  onEndReachedThreshold: number,
  stickyHeaderIndices: array,
  renderItem: func,
};
const defaultProps = {
  keyExtractor: null,
  ListFooterComponent: null,
  onRefresh: () => { },
  onEndReached: () => {},
  onEndReachedThreshold: 0,
  stickyHeaderIndices: [],
  renderItem: () => { },
};

const List = props => (
  <FlatList
    data={props.data}
    keyExtractor={props.keyExtractor}
    ListFooterComponent={() => props.ListFooterComponent}
    onRefresh={props.onRefresh}
    onEndReached={props.onEndReached}
    onEndReachedThreshold={props.onEndReachedThreshold}
    stickyHeaderIndices={props.stickyHeaderIndices}
    renderItem={props.renderItem}
  />
);

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default List;
