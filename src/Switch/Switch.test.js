/* global describe it expect jest:true */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Switch from './Switch';

describe('Switch Snapshots', () => {
  it('should render a Switch', () => {
    const component = renderer.create(<Switch />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a Switch toggled on', () => {
    const component = renderer.create(<Switch value />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a Switch disabled', () => {
    const component = renderer.create(<Switch disabled />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a Switch disabled toggled on', () => {
    const component = renderer.create(<Switch disabled value />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a Switch with custom color', () => {
    const component = renderer.create(<Switch color="#FAFAFA" />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe('Interactions', () => {
  it('should execute onPress callback', () => {
    const props = { onPress: jest.fn() };
    const wrapper = shallow(<Switch {...props} />);

    wrapper.prop('onValueChange')();
    expect(props.onPress).toHaveBeenCalledTimes(1);
  });
});
