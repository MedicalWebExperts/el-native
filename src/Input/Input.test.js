import React from 'react';
import renderer from 'react-test-renderer';

import Input from './Input';
import colors from '../styles/colors';

const props = {
  placeholder: 'Placeholder text',
  onChangeText: () => {},
  multiline: false,
  numberOfLines: 4,
  autoCorrect: false,
  editable: false,
  selectTextOnFocus: false,
  error: false,
  errorText: 'Error text',
  style: {},
  type: 'underline',
  placeholderTextColor: colors.textColor,
};

const customStyle = {
  borderColor: colors.primary,
};

describe('Input Snapshots', () => {
  it('should render an Input default', () => {
    const component = renderer.create(<Input {...props} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render an Input default with error', () => {
    const component = renderer.create(<Input {...props} error />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render an Input with custom styling', () => {
    const component = renderer.create(<Input {...props} style={customStyle} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a squared Input', () => {
    const component = renderer.create(<Input {...props} style={customStyle} type="squared" />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a squared Input with error', () => {
    const component = renderer.create(
      <Input {...props} style={customStyle} type="squared" error />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a rounded Input', () => {
    const component = renderer.create(<Input {...props} style={customStyle} type="rounded" />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a rounded Input with error', () => {
    const component = renderer.create(
      <Input {...props} style={customStyle} type="rounded" error />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a Text Area Input', () => {
    const component = renderer.create(
      <Input {...props} style={customStyle} placeholder="Text Area" multiline numberOfLines={8} />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
