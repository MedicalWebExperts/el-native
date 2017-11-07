import React from 'react';
import renderer from 'react-test-renderer';

import Gradient from './index';

const defaultProps = {
  gradientColors: ['#FFFFFF', '#FAFAFA', '#EAEAEA'],
};

describe('Snapshots', () => {
  it('should render default gradient', () => {
    const component = renderer.create(<Gradient
      {...defaultProps}
    />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
