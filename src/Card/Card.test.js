import React from 'react';
import renderer from 'react-test-renderer';

import Card from './Card';

describe('Card Snapshots', () => {
  it('should render a simple Card', () => {
    const component = renderer.create(<Card />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
