import React from 'react';
import renderer from 'react-test-renderer';

import FilterModal from './FilterModal';

describe('FilterModal Snapshots', () => {
  it('should render a simple FilterModal', () => {
    const component = renderer.create(<FilterModal />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
