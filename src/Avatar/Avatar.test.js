import React from 'react';
import renderer from 'react-test-renderer';

import Avatar from './Avatar';

import placeholderImage from './placeholderImage.png';

const imageUrl = 'https://wallscover.com/images/gunther-wallpaper-2.jpg';

const props = {
  square: false,
  size: 'medium',
  borderColor: '',
  borderThickness: 0,
  placeholder: null,
  source: '',
};

describe('Avatar Snapshots', () => {
  it('should render an Avatar Large with placeholder', () => {
    const component = renderer.create(
      <Avatar {...props} size="large" placeholder={placeholderImage} />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render an Avatar Large', () => {
    const component = renderer.create(<Avatar {...props} source={imageUrl} size="large" />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render an Avatar Medium', () => {
    const component = renderer.create(<Avatar {...props} source={imageUrl} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render an Avatar Small', () => {
    const component = renderer.create(<Avatar {...props} source={imageUrl} size="small" />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render an Avatar Large bordered', () => {
    const component = renderer.create(
      <Avatar {...props} source={imageUrl} size="large" borderColor={'blue'} borderThickness={2} />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render an Avatar Medium bordered', () => {
    const component = renderer.create(
      <Avatar
        {...props}
        source={imageUrl}
        size="medium"
        borderColor={'blue'}
        borderThickness={2}
      />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render an Avatar Small bordered', () => {
    const component = renderer.create(
      <Avatar {...props} source={imageUrl} size="small" borderColor={'blue'} borderThickness={2} />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render an Avatar Square Large', () => {
    const component = renderer.create(<Avatar {...props} source={imageUrl} square size="large" />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render an Avatar Square Medium', () => {
    const component = renderer.create(<Avatar {...props} source={imageUrl} square size="medium" />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render an Avatar Square Small', () => {
    const component = renderer.create(<Avatar {...props} source={imageUrl} square size="small" />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render an Avatar Square Large bordered', () => {
    const component = renderer.create(
      <Avatar
        {...props}
        source={imageUrl}
        square
        size="large"
        borderColor={'blue'}
        borderThickness={2}
      />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render an Avatar Square Medium bordered', () => {
    const component = renderer.create(
      <Avatar
        {...props}
        source={imageUrl}
        square
        size="medium"
        borderColor={'blue'}
        borderThickness={2}
      />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render an Avatar Square Small bordered', () => {
    const component = renderer.create(
      <Avatar
        {...props}
        source={imageUrl}
        square
        size="small"
        borderColor={'blue'}
        borderThickness={2}
      />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
