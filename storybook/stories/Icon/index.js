import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import { Icon } from '../../../src';

storiesOf('Icon', module)
  .addDecorator(getStory => (
    <CenterView style={{ backgroundColor: '#AFAFAF' }}>{getStory()}</CenterView>
  ))
  .add('Default', () => <Icon />)
  .add('Custom color', () => <Icon size={200} color="aquamarine" />)
  .add('Custom size', () => <Icon size={150} />)
  .add('Custom icon', () => <Icon size={200} name="ios-basketball" />)
  .add('Custom all', () => <Icon name="ios-football" size={250} color="azure" />);
