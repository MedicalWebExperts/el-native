import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import { Avatar } from '../../../src';
import placeholderImage from '../../../src/Avatar/placeholderImage.png';
import colors from '../../../src/styles/colors';

const imageUrl = 'https://wallscover.com/images/gunther-wallpaper-2.jpg';

storiesOf('Avatar', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Large', () => <Avatar source={imageUrl} size="large" />)
  .add('Large (placeholder example)', () => <Avatar placeholder={placeholderImage} size="large" />)
  .add('Medium (default)', () => <Avatar source={imageUrl} />)
  .add('Small', () => <Avatar source={imageUrl} size="small" />)
  .add('Large Bordered', () => (
    <Avatar source={imageUrl} size="large" borderColor={colors.blueColor} borderThickness={2} />
  ))
  .add('Medium bordered', () => (
    <Avatar source={imageUrl} size="medium" borderColor={colors.blueColor} borderThickness={2} />
  ))
  .add('Small Bordered', () => (
    <Avatar source={imageUrl} size="small" borderColor={colors.blueColor} borderThickness={2} />
  ))
  .add('Large Square', () => <Avatar source={imageUrl} size="large" square />)
  .add('Medium Square', () => <Avatar source={imageUrl} size="medium" square />)
  .add('Small Square', () => <Avatar source={imageUrl} size="small" square />)
  .add('Large Square bordered', () => (
    <Avatar
      source={imageUrl}
      square
      size="large"
      borderColor={colors.blueColor}
      borderThickness={2}
    />
  ))
  .add('Medium Square bordered', () => (
    <Avatar
      source={imageUrl}
      square
      size="medium"
      borderColor={colors.blueColor}
      borderThickness={2}
    />
  ))
  .add('Small Square bordered', () => (
    <Avatar
      source={imageUrl}
      square
      size="small"
      borderColor={colors.blueColor}
      borderThickness={2}
    />
  ));
