import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { OptionGroup } from '../../../src';

const handleOnChange = (selected) => {
  console.log(selected);
};

const options = [{ id: 1, label: 'one' }, { id: 2, label: 'two' }, { id: 3, label: 'three' }];
storiesOf('OptionGroup', module)
  .add('Default', () => <OptionGroup options={options} onChange={handleOnChange} />)
  .add('styled', () => (
    <OptionGroup
      options={options}
      onChange={handleOnChange}
      iconStyles={{ color: 'red' }}
      labelStyles={{ color: 'red' }}
    />
  ))
  .add('spaced', () => <OptionGroup options={options} onChange={handleOnChange} spaced />)
  .add('spaced right', () => (
    <OptionGroup options={options} onChange={handleOnChange} iconRight spaced />
  ))
  .add('style option row', () => (
    <OptionGroup options={options} onChange={handleOnChange} style={{ backgroundColor: 'red' }} />
  ))
  .add('selected', () => <OptionGroup options={options} onChange={handleOnChange} selected={3} />);
