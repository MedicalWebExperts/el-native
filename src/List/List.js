import React from 'react';
import { FlatList } from 'react-native';
import { array, func, string, number, oneOfType, node } from 'prop-types';

const propTypes = {
  /**
   * Data to populate the List
   */
  data: array.isRequired,
  /**
   * Used as an index for ordering
   */
  keyExtractor: oneOfType([string, number]),
  /**
   * ListFooterComponent expects a component to render at the end of the list. Usefull
   * to show a spinner on loading
   */
  ListFooterComponent: node,
  /**
   * Function to execute when onRefresh action is being triggered
   */
  onRefresh: func,
  /**
   * Function to execute when the List is come to an end. Useful for pagination
   */
  onEndReached: func,
  /**
   * Number of miliseconds to trigger onEndReached once List come to an end.
   */
  onEndReachedThreshold: number,
  /**
   * Indices to render sticky headers
   */
  stickyHeaderIndices: array,
  /**
   * Function to execute to show each Row of the List
   */
  renderItem: func,
};
const defaultProps = {
  keyExtractor: null,
  ListFooterComponent: null,
  onRefresh: () => {},
  onEndReached: () => {},
  onEndReachedThreshold: 0,
  stickyHeaderIndices: [],
  renderItem: () => {},
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
    refreshing={!!props.onRefresh}
  />
);

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default List;
