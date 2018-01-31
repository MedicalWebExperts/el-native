import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import { Card } from '../../../src';
import colors from '../styles/colors';

const styles = {
  backgroundColor: colors.jade,
  maxHeight: 200,
};

storiesOf('Card', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <Card style={styles} />)
  .add('Raised Card', () => <Card style={styles} raised />);
