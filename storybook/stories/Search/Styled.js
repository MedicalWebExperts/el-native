import React from 'react';
import { View, Text } from 'react-native';

import { Search } from '../../../src';

const inputStyles = {
  borderColor: '#ddd',
  backgroundColor: '#ddd',
  borderRadius: 10,
  color: '#999',
};

const cancelIconStyles = {
  color: '#999',
};

const labelStyle = {
  borderColor: '#afafaf',
};
const labelStyleActive = {
  backgroundColor: '#b3e5fc',
  borderColor: '#b3e5fc',
};
const labelTextStyle = {
  color: '#2196F3',
};

const objList = [
  { name: 'Janice', color: 'Green', city: 'Barcelona' },
  { name: 'Fred', color: 'Orange', city: 'Los Angeles' },
  { name: 'George', color: 'Red', city: 'Paris' },
  { name: 'George', color: 'Red', city: 'London' },
  { name: 'Jen', color: 'Red', city: 'Paris' },
  { name: 'Paris', color: 'Pink', city: 'Madrid' },
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
    { name: 'London', value: false },
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
        <View>{objList.map((v, i) => <Text key={i}>{JSON.stringify(v)}</Text>)}</View>
        <Search
          label="option button"
          handleSearch={this.handleSearch}
          dataList={objList}
          keys={['name', 'color']}
          filters={filters}
          inputStyles={inputStyles}
          cancelIconStyles={cancelIconStyles}
          labelStyle={labelStyle}
          labelTextStyle={labelTextStyle}
          labelStyleActive={labelStyleActive}
        />
        {this.state.result.map((v, i) => <Text key={i}>{JSON.stringify(v)}</Text>)}
      </View>
    );
  }
}

export default ObjectKeysSearch;
