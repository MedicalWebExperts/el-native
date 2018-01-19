import React from 'react';

import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import { Button } from '../../../src';

const styles = {
  backgroundColor: '#FF0000',
};
storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <Button text="LOGIN" onPress={() => false} />)
  .add('Disbled', () => <Button text="DISABLED" disabled onPress={() => false} />)
  .add('Styled', () => <Button text="STYLED" onPress={() => false} style={styles} />)
  .add('Block', () => <Button text="BLOCK" onPress={() => false} block />)
  .add('transparent', () => <Button text="TRANSPARENT" onPress={() => false} transparent />)
  .add('rounded', () => <Button text="R" onPress={() => false} rounded />)

  .add('outline', () => <Button text="OUTLINE" onPress={() => false} outline />);
