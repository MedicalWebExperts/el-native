import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import { List, ComposedRow } from '../../../src';

const imageUrl = 'https://wallscover.com/images/gunther-wallpaper-2.jpg';

const data = [
  {
    id: 1,
    title: 'Title',
    subTitle: 'I am the subtitle',
    smallText: 'smaller text',
  },
  {
    id: 2,
    title: 'Title',
    subTitle: 'I am the subtitle',
    smallText: 'smaller text',
  },
  {
    id: 3,
    title: 'Title',
    subTitle: 'I am the subtitle',
    smallText: 'smaller text',
  },
  {
    id: 4,
    title: 'Title',
    subTitle: 'I am the subtitle',
    smallText: 'smaller text',
  },
  {
    id: 5,
    title: 'Title',
    subTitle: 'I am the subtitle',
    smallText: 'smaller text',
  },
];

const renderRow = item => (
  <ComposedRow
    style={{ maxHeight: 100, backgroundColor: 'salmon' }}
    onPress={() => {}}
    avatar={imageUrl}
    title={item.title}
    subTitle={item.subTitle}
    subTitleIcon="ios-basketball"
    subTitleText={item.smallText}
    rightIcon="ios-navigate"
    rightIconOnPress={() => {
      console.warn('You have pressed the Icon!');
    }}
    rightText="3.830mi"
  />
);

const keyExtractor = item => item.id;

storiesOf('List', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <List data={data} keyExtractor={keyExtractor} renderItem={({ item }) => renderRow(item)} />
  ));
