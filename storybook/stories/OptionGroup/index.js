import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import { OptionGroup } from '../../../src';

const handleOnChange = (selected) => {
  console.log(selected);
};

const options = [{ id: 1, label: 'one' }, { id: 2, label: 'two' }, { id: 3, label: 'three' }];
storiesOf('OptionGroup', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <OptionGroup options={options} onChange={handleOnChange} />)
  .add('styled', () => (
    <OptionGroup
      options={options}
      onChange={handleOnChange}
      iconStyles={{ color: 'red' }}
      labelStyles={{ color: 'red' }}
    />
  ));
