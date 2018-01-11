import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import { H1, H2, H3, H4, H5, Text } from '../../../src';

storiesOf('Map', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('H1', () => <H1>{"I'm the migthy H1."}</H1>)
  .add('H1 Color', () => <H1 color>{"I'm the migthy H1, dressed in colors."}</H1>)
  .add('H2', () => <H2>{"I'm H2, nothing wrong with being second."}</H2>)
  .add('H2 Color', () => <H2 color>{"I'm H2. With colors!"}</H2>)
  .add('H3', () => <H3>{"I'm H3, how are you?"}</H3>)
  .add('H3 Color', () => <H3 color>{"I'm H3 in colors."}</H3>)
  .add('H4', () => <H4>{'H4 here, hi!'}</H4>)
  .add('H4 Color', () => <H4 color>{'H4 in colors.'}</H4>)
  .add('H5', () => <H5>{"I'm H5, and I'm glad I am"}</H5>)
  .add('H5 Color', () => <H5 color>{"I'm H5 coloured."}</H5>)
  .add('Text', () => <Text>{"I'm just and old plain Text."}</Text>);
