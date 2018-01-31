import React from 'react';
import renderer from 'react-test-renderer';

import Row from './Row';

describe('Row Snapshots', () => {
  it('should render a simple Row', () => {
    const component = renderer.create(<Row />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});