import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import { Map } from '../../../src';
import colors from '../styles/colors';

const apiKey = process.env.ELNATIVE_GOOGLE_MAPS_APIKEY || '';

storiesOf('Map', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <Map latitude={-34.5844583} longitude={-58.4230539} apiKey={apiKey} />)
  .add('Custom button', () => (
    <Map
      latitude={-34.5844583}
      longitude={-58.4230539}
      apiKey={apiKey}
      button={<Text>Custom</Text>}
    />
  ))
  .add('Custom button style', () => (
    <Map
      latitude={-34.5844583}
      longitude={-58.4230539}
      apiKey={apiKey}
      style={{
        button: {
          backgroundColor: colors.blueColor,
        },
      }}
    />
  ))
  .add('underlayColor', () => (
    <Map
      latitude={-34.5844583}
      longitude={-58.4230539}
      apiKey={apiKey}
      underlayColor={colors.primary}
    />
  ));
