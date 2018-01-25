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
  .add('Disabled', () => <Button text="DISABLED" disabled onPress={() => false} />)
  .add('Styled', () => (
    <Button
      text="STYLED"
      onPress={() => false}
      backgroundStyles={styles}
      textStyles={{ color: 'black' }}
    />
  ))
  .add('Block', () => <Button text="BLOCK" onPress={() => false} block />)
  .add('transparent', () => (
    <Button text="TRANSPARENT" onPress={() => false} transparent textStyles={{ color: 'black' }} />
  ))
  .add('rounded', () => (
    <Button icon="ios-basketball" onPress={() => false} roundedDimensions={40} />
  ))
  .add('icon', () => <Button onPress={() => false} icon="ios-basketball" />)
  .add('icon left', () => <Button text="LOGIN" onPress={() => false} iconLeft="ios-basketball" />)
  .add('icon right', () => <Button text="LOGIN" onPress={() => false} iconRight="ios-basketball" />)
  .add('processing', () => <Button onPress={() => false} processing />)
  .add('processing with text', () => <Button text="LOADING..." onPress={() => false} processing />)
  .add('outline', () => <Button text="OUTLINE" onPress={() => false} outline />);
