/* global describe it expect jest:true */
import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

const styles = {
  backgroundColor: '#FF0000',
};

describe('Button Snapshots', () => {
  it('should render a Button', () => {
    const component = renderer.create(<Button onPress={() => false} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a Button disabled', () => {
    const component = renderer.create(<Button text="DISABLED" disabled onPress={() => false} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a Button with custom styles', () => {
    const component = renderer.create(
      <Button text="STYLED" onPress={() => false} style={styles} />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a Button block', () => {
    const component = renderer.create(<Button text="BLOCK" onPress={() => false} block />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a transparent Button', () => {
    const component = renderer.create(
      <Button text="TRANSPARENT" onPress={() => false} transparent />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a rounded Button', () => {
    const component = renderer.create(
      <Button icon="ios-basketball" onPress={() => false} roundedDimensions={40} />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render an icon Button', () => {
    const component = renderer.create(<Button onPress={() => false} icon="ios-basketball" />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a Button with a left icon', () => {
    const component = renderer.create(
      <Button text="LOGIN" onPress={() => false} iconLeft="ios-basketball" />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a Button with a right button', () => {
    const component = renderer.create(
      <Button text="LOGIN" onPress={() => false} iconRight="ios-basketball" />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a Button with a spinner', () => {
    const component = renderer.create(<Button onPress={() => false} processing />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a Button with a spinner and text', () => {
    const component = renderer.create(
      <Button text="LOADING..." onPress={() => false} processing />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a outline Button', () => {
    const component = renderer.create(<Button text="OUTLINE" onPress={() => false} outline />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
