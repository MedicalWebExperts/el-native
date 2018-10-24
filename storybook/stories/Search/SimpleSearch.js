import React from 'react';
import { View, Text } from 'react-native';

import { Search } from '../../../src';

const list = ['hi', 'hey', 'hello', 'sup', 'yo'];

class SimpleSearch extends React.Component {
  state = {
    result: [],
  };
  handleSearch = (result) => {
    this.setState({ result });
  };
  render() {
    return (
      <View>
        <View>{list.map(v => <Text key={v}>{v}</Text>)}</View>
        <Search label="option button" handleSearch={this.handleSearch} dataList={list} />
        {this.state.result.map(v => <Text key={v}>{v}</Text>)}
      </View>
    );
  }
}

export default SimpleSearch;
