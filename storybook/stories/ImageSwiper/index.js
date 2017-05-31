import React from 'react';

import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import ImageSwiper from '../../../src/ImageSwiper';

storiesOf('ImageSwiper', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <ImageSwiper images={[{ uri: 'https://facebook.github.io/react/img/logo_og.png' }, { uri: 'https://facebook.github.io/react/img/logo_og.png' }]} />);
