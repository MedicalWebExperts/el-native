import React from 'react';
import { View, Text } from 'react-native';

import { Search } from '../../../src';

const objList = [
  { name: 'Janice', color: 'Green' },
  { name: 'Fred', color: 'Orange' },
  { name: 'George', color: 'Blue' },
  { name: 'Jen', color: 'Red' },
];

class ObjectKeysSearch extends React.Component {
  state = {
    result: [],
  };
  handleSearch = (result) => {
    this.setState({ result });
  };
  render() {
    return (
      <View>
        <View>{objList.map(v => <Text key={v.name}>{JSON.stringify(v)}</Text>)}</View>
        <Search
          label="option button"
          handleSearch={this.handleSearch}
          dataList={objList}
          keys={['name', 'color']}
        />
        {this.state.result.map(v => <Text key={v.name}>{JSON.stringify(v)}</Text>)}
      </View>
    );
  }
}

export default ObjectKeysSearch;
