import React from 'react';
import renderer from 'react-test-renderer';

import ComposedRow from './ComposedRow';

describe('ComposedRow Snapshots', () => {
  it('should render a simple ComposedRow', () => {
    const component = renderer.create(<ComposedRow />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
