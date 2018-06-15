import React from 'react';
import { View, Text } from 'react-native';

import { Search } from '../../../src';

const objList = [
  { name: 'Janice', color: 'Green', city: 'Barcelona' },
  { name: 'Fred', color: 'Orange', city: 'Los Angeles' },
  { name: 'George', color: 'Red', city: 'Paris' },
  { name: 'Jen', color: 'Red', city: 'Paris' },
];

const filters = {
  color: [
    { name: 'Red', value: false },
    { name: 'Green', value: false },
    { name: 'Orange', value: false },
  ],
  city: [
    { name: 'Paris', value: false },
    { name: 'Los Angeles', value: false },
    { name: 'Barcelona', value: false },
  ],
};
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
          filters={filters}
        />
        {this.state.result.map(v => <Text key={v.name}>{JSON.stringify(v)}</Text>)}
      </View>
    );
  }
}

export default ObjectKeysSearch;
