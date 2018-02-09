import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import { Card, CardHeader, CardBody, CardFooter, CardMedia, Text } from '../../../src';
import colors from '../styles/colors';

const imageUrl = 'https://wallscover.com/images/gunther-wallpaper-2.jpg';

const videoUrl = 'https://www.youtube.com/watch?v=z13qnzUQwuI';

const styles = {
  backgroundColor: colors.jade,
  maxHeight: 200,
};

const completeCardStyles = {
  backgroundColor: colors.jade,
  maxHeight: 300,
};

storiesOf('Card', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <Card style={styles}>
      <Text>Hi!</Text>
    </Card>
  ))
  .add('Raised Card', () => (
    <Card style={styles} raised>
      <Text>Hi!</Text>
    </Card>
  ))
  .add('Card with CardHeader', () => (
    <Card style={styles}>
      <CardHeader
        avatar={imageUrl}
        title="Title of CardHeader"
        subTitle="Subtitle of CardHeader"
        rightIcon="ios-basketball"
        rightIconOnPress={() => {
          console.warn('Icon Pressed!');
        }}
      />
    </Card>
  ))
  .add('Card with CardBody', () => (
    <Card style={styles}>
      <CardBody>
        <Text>Hi!</Text>
      </CardBody>
    </Card>
  ))
  .add('Card with Cardfooter', () => (
    <Card style={styles}>
      <CardFooter leftIcon="ios-basketball" centerText="Text of CardFooter" />
    </Card>
  ))
  .add('Card with CardMedia image', () => (
    <Card style={styles}>
      <CardMedia image={imageUrl} />
    </Card>
  ))
  .add('Card with CardMedia video', () => (
    <Card style={styles}>
      <CardMedia video={videoUrl} />
    </Card>
  ))
  .add('Card with all internal components', () => (
    <Card style={completeCardStyles}>
      <CardHeader
        avatar={imageUrl}
        title="Title of CardHeader"
        rightIcon="ios-basketball"
        rightIconOnPress={() => {
          console.warn('Icon Pressed!');
        }}
      />
      <CardBody>
        <CardMedia image={imageUrl} />
      </CardBody>
      <CardFooter leftIcon="ios-basketball" centerText="Text of CardFooter" />
    </Card>
  ));
