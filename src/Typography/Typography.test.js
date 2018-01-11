/* global describe it expect jest:true */
import React from 'react';
import renderer from 'react-test-renderer';

import { H1, H2, H3, H4, H5, Text } from './Typography';

const props = {
  style: {},
  color: false,
  children: 'Hi there!',
};

const textProps = {
  style: {},
  children: 'Hi there!',
};

describe('H1 Snapshots', () => {
  it('should render an H1', () => {
    const component = renderer.create(<H1 {...props} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render an H1 with color', () => {
    const component = renderer.create(<H1 {...props} color />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should apply custom styles to H1', () => {
    const component = renderer.create(
      <H1
        {...props}
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
    const component = renderer.create(<H2 {...props} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render an H2 with color', () => {
    const component = renderer.create(<H2 {...props} color />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should apply custom styles to H2', () => {
    const component = renderer.create(
      <H2
        {...props}
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
    const component = renderer.create(<H3 {...props} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render an H3 with color', () => {
    const component = renderer.create(<H3 {...props} color />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should apply custom styles to H3', () => {
    const component = renderer.create(
      <H3
        {...props}
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
    const component = renderer.create(<H4 {...props} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render an H4 with color', () => {
    const component = renderer.create(<H4 {...props} color />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should apply custom styles to H4', () => {
    const component = renderer.create(
      <H4
        {...props}
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
    const component = renderer.create(<H5 {...props} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render an H5 with color', () => {
    const component = renderer.create(<H5 {...props} color />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should apply custom styles to H5', () => {
    const component = renderer.create(
      <H5
        {...props}
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
    const component = renderer.create(<Text {...textProps} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render an Text with color', () => {
    const component = renderer.create(<Text {...textProps} color />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should apply custom styles to Text', () => {
    const component = renderer.create(
      <Text
        {...textProps}
        style={{
          color: 'green',
        }}
      />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
