import React from 'react';
import { Platform } from 'react-native';
import renderer from 'react-test-renderer';

import Icon from './Icon';

const customProps = {
  color: 'aquamarine',
  size: 14,
  name: `${Platform.OS === 'ios' ? 'ios' : 'md'}-beer`,
};

describe('Icon Snapshots', () => {
  it('should render a simple Icon', () => {
    const component = renderer.create(<Icon />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a custom Icon', () => {
    const component = renderer.create(<Icon {...customProps} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
