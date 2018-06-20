import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import SimpleSearch from './SimpleSearch';
import ObjectKeysSearch from './ObjectKeysSearch';
import Styled from './Styled';

storiesOf('Search', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <SimpleSearch />)
  .add('Styled', () => <Styled />)
  .add('Search Object Keys', () => <ObjectKeysSearch />);
