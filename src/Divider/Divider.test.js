import React from 'react';
import renderer from 'react-test-renderer';

import Divider from './Divider';

const customColor = 'darkgray';
const customPrimaryColor = 'aquamarine';

describe('Divider Snapshots', () => {
  it('should render a simple Divider ', () => {
    const component = renderer.create(<Divider />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a short Divider', () => {
    const component = renderer.create(<Divider length="short" />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a medium Divider', () => {
    const component = renderer.create(<Divider length="medium" />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a long Divider', () => {
    const component = renderer.create(<Divider length="long" />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a Divider with custom colors', () => {
    const component = renderer.create(
      <Divider color={customColor} primaryColor={customPrimaryColor} />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
