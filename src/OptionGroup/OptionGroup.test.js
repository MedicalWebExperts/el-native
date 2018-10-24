import React from 'react';
import { shallow } from 'enzyme';

import OptionGroup from './OptionGroup';
import Option from '../Option/Option';

const options = [{ id: 1, label: 'one' }, { id: 2, label: 'two' }, { id: 3, label: 'three' }];

describe('OptionGroup', () => {
  it('should render a list of Options', () => {
    const wrapper = shallow(<OptionGroup options={options} />);
    expect(wrapper.find(Option)).toHaveLength(options.length);
  });

  it('should render the label', () => {
    const wrapper = shallow(<OptionGroup options={options} />);
    expect(wrapper
      .find(Option)
      .first()
      .props().label).toBe(options[0].label);
  });
});
