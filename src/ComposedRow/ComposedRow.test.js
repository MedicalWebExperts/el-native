import React from 'react';
import renderer from 'react-test-renderer';

import ComposedRow from './ComposedRow';

describe('ComposedRow Snapshots', () => {
  it('should render a simple ComposedRow', () => {
    const component = renderer.create(<ComposedRow
      style={{ maxHeight: 100, backgroundColor: 'salmon' }}
      title="Title of Composed Row"
      subTitle="Here goes a random a Text as Lorem Ipsum"
    />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
