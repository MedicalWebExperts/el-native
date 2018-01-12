import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import { Avatar } from '../../../src';
import placeholderImage from '../../../src/Avatar/placeholderImage.png';

storiesOf('Avatar', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <Avatar source={placeholderImage} />);
