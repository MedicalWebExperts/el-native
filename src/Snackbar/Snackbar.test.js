import React from 'react';
import renderer from 'react-test-renderer';

import Snackbar from './Snackbar';

describe('Snackbar Snapshots', () => {
  it('should render a simple Snackbar', () => {
    const component = renderer.create(<Snackbar />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
