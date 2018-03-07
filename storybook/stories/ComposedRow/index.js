import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import { ComposedRow } from '../../../src';

const imageUrl = 'https://wallscover.com/images/gunther-wallpaper-2.jpg';

storiesOf('ComposedRow', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <ComposedRow
      style={{ maxHeight: 100, backgroundColor: 'salmon' }}
      title="Title of Composed Row"
      subTitle="Here goes a random a Text as Lorem Ipsum"
    />
  ))
  .add('Clickable Default with Avatar', () => (
    <ComposedRow
      style={{ maxHeight: 100, backgroundColor: 'salmon' }}
      onPress={() => {}}
      avatar={imageUrl}
      title="Title of Composed Row"
      subTitle="Here goes a random a Text as Lorem Ipsum"
    />
  ))
  .add('All props', () => (
    <ComposedRow
      style={{ maxHeight: 100, backgroundColor: 'salmon' }}
      onPress={() => {}}
      avatar={imageUrl}
      title="Title of Composed Row"
      subTitle="Here goes a random a Text as Lorem Ipsum"
      subTitleIcon="ios-basketball"
      subTitleText="I'm the subtitle text"
      rightIcon="ios-basketball"
    />
  ))
  .add('All props with leftIcon instead of Avatar', () => (
    <ComposedRow
      style={{ maxHeight: 100, backgroundColor: 'salmon' }}
      onPress={() => {}}
      leftIcon="ios-basketball"
      title="Title of Composed Row"
      subTitle="Here goes a random a Text as Lorem Ipsum"
      subTitleIcon="ios-basketball"
      subTitleText="I'm the subtitle text"
      rightText="3.830mi"
    />
  ))
  .add('All props with rightIcon and rightText', () => (
    <ComposedRow
      style={{ maxHeight: 100, backgroundColor: 'salmon' }}
      onPress={() => {}}
      avatar={imageUrl}
      title="Title of Composed Row"
      subTitle="Here goes a random a Text as Lorem Ipsum"
      subTitleIcon="ios-basketball"
      subTitleText="I'm the subtitle text"
      rightIcon="ios-basketball"
      rightIconOnPress={() => {
        console.warn('You have pressed the Icon!');
      }}
      rightText="3.830mi"
    />
  ));
