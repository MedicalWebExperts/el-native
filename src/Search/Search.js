/* eslint no-console: ["error", { allow: ["error"] }] */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import matchSorter from 'match-sorter';
import { View } from 'react-native';
import { Input, Button } from '../index';

import Theme from '../Theme';

const theme = Theme.getTheme();
const styles = theme.search;

const propTypes = {
  handleSearch: PropTypes.func,
  keys: PropTypes.array,
  dataList: PropTypes.array.isRequired,
};

const defaultProps = {
  handleSearch: () => null,
  keys: [],
};

class Search extends Component {
  state = {
    value: '',
  };
  onEndEditing = () => {
    this.handleSearch();
  };
  handleChange = (value) => {
    this.setState({ value });
  };
  handleSearch = () => {
    const { value } = this.state;
    let result = [];
    if (value) {
      result = matchSorter(
        this.props.dataList,
        this.state.value,
        this.props.keys.length ? { keys: this.props.keys } : undefined,
      );
    }
    this.props.handleSearch(result);
  };
  cleanInput = () => {
    this.setState({ value: '' });
  };
  render() {
    return (
      <View style={styles.wrapper}>
        <Input
          placeholder="Search"
          type="squared"
          onChangeText={text => this.handleChange(text)}
          value={this.state.value}
          style={{ height: 40 }}
          onEndEditing={this.onEndEditing}
          returnKeyType="search"
        />
        {this.state.value !== '' && (
          <View style={styles.button}>
            <Button
              onPress={this.cleanInput}
              icon="ios-close"
              transparent
              textStyles={{ color: '#999', fontSize: 28 }}
              backgroundStyles={{ height: 40, width: 40 }}
            />
          </View>
        )}
      </View>
    );
  }
}

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;
export default Search;
