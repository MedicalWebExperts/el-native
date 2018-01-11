/* global describe it expect jest:true */
import React from 'react';
import renderer from 'react-test-renderer';

import { H1, H2, H3, H4, H5, Text } from './Typography';

const defaultProps = {
  style: {},
  color: false,
};

const textDefaultProps = {
  style: {},
};

describe('H1 Snapshots', () => {
  it('should render an H1', () => {
    const component = renderer.create(<H1 {...defaultProps} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render an H1 with color', () => {
    const component = renderer.create(<H1 {...defaultProps} color />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should apply custom styles to H1', () => {
    const component = renderer.create(
      <H1
        {...defaultProps}
        style={{
          color: 'green',
        }}
      />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe('H2 Snapshots', () => {
  it('should render an H2', () => {
    const component = renderer.create(<H2 {...defaultProps} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render an H2 with color', () => {
    const component = renderer.create(<H2 {...defaultProps} color />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should apply custom styles to H2', () => {
    const component = renderer.create(
      <H2
        {...defaultProps}
        style={{
          color: 'green',
        }}
      />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe('H3 Snapshots', () => {
  it('should render an H3', () => {
    const component = renderer.create(<H3 {...defaultProps} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render an H3 with color', () => {
    const component = renderer.create(<H3 {...defaultProps} color />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should apply custom styles to H3', () => {
    const component = renderer.create(
      <H3
        {...defaultProps}
        style={{
          color: 'green',
        }}
      />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe('H4 Snapshots', () => {
  it('should render an H4', () => {
    const component = renderer.create(<H4 {...defaultProps} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render an H4 with color', () => {
    const component = renderer.create(<H4 {...defaultProps} color />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should apply custom styles to H4', () => {
    const component = renderer.create(
      <H4
        {...defaultProps}
        style={{
          color: 'green',
        }}
      />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe('H5 Snapshots', () => {
  it('should render an H5', () => {
    const component = renderer.create(<H5 {...defaultProps} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render an H5 with color', () => {
    const component = renderer.create(<H5 {...defaultProps} color />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should apply custom styles to H5', () => {
    const component = renderer.create(
      <H5
        {...defaultProps}
        style={{
          color: 'green',
        }}
      />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe('Text Snapshots', () => {
  it('should render an Text', () => {
    const component = renderer.create(<Text {...textDefaultProps} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render an Text with color', () => {
    const component = renderer.create(<Text {...textDefaultProps} color />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should apply custom styles to Text', () => {
    const component = renderer.create(
      <Text
        {...textDefaultProps}
        style={{
          color: 'green',
        }}
      />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
