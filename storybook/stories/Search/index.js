import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import SimpleSearch from './SimpleSearch';
import ObjectKeysSearch from './ObjectKeysSearch';

storiesOf('Search', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <SimpleSearch />)
  .add('Search Object Keys', () => <ObjectKeysSearch />);
