/* global describe it expect jest:true */
import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Map from './index';

const apiKey = process.env.ELNATIVE_GOOGLE_MAPS_APIKEY || '';

const defaultProps = {
  latitude: -34.5844583,
  longitude: -58.4230539,
  apiKey,
};

describe('Snapshots', () => {
  it('should render default map', () => {
    const component = renderer.create(<Map
      {...defaultProps}
    />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render custom button', () => {
    const component = renderer.create(<Map
      {...defaultProps}
      button={<Text>custom</Text>}
    />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should apply custom styles', () => {
    const component = renderer.create(<Map
      {...defaultProps}
      style={{
        container: { width: 50 },
        button: { backgroundColor: 'yellow' },
      }}
    />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should apply underlayColor', () => {
    const component = renderer.create(<Map
      {...defaultProps}
      underlayColor="green"
    />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe('Interactions', () => {
  it('should execute onPress callback', () => {
    const props = { ...defaultProps, onPress: jest.fn() };
    const wrapper = shallow(<Map {...props} />);

    wrapper.find('TouchableHighlight').prop('onPress')();
    expect(props.onPress).toHaveBeenCalledTimes(1);
  });
});
