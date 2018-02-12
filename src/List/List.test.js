import React from 'react';
import renderer from 'react-test-renderer';

import List from './List';

describe('List Snapshots', () => {
  it('should render a simple List', () => {
    const component = renderer.create(<List />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});