/* global describe it expect jest:true */
import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

describe('H1 Snapshots', () => {
  it('should render a Button', () => {
    const component = renderer.create(<Button />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
