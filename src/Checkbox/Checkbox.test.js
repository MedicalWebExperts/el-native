import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Checkbox from './Checkbox';

describe('Checkbox Snapshots', () => {
  it('should render a simple Checkbox', () => {
    const component = renderer.create(<Checkbox />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a checked Checkbox', () => {
    const component = renderer.create(<Checkbox checked />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a Checkbox with custom size', () => {
    const component = renderer.create(<Checkbox size={120} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a Checkbox with custom color', () => {
    const component = renderer.create(<Checkbox color="#FAFAFA" />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe('Interactions', () => {
  it('should execute onPress callback', () => {
    const props = { onPress: jest.fn() };
    const wrapper = shallow(<Checkbox {...props} />);

    wrapper.find('TouchableOpacity').prop('onPress')();
    expect(props.onPress).toHaveBeenCalledTimes(1);
  });
});
