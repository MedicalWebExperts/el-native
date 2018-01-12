import React from 'react';
import { oneOf, oneOfType, string, number, imgSrcPropType, object } from 'prop-types';
import { Image } from 'react-native';

import Styles from './styles';

const propTypes = {
  /**
   * Description of prop "shape".
   */
  shape: oneOf('square', 'circle'),
  /**
   * Description of prop "size".
   */
  size: oneOf('large', 'medium', 'small'),
  /**
   * Description of prop "borderColor".
   */
  borderColor: string,
  /**
   * Description of prop "borderThickness".
   */
  borderThickness: number,
  /**
   * Description of prop "placeholder".
   */
  placeholder: oneOfType(string, imgSrcPropType),
  /**
   * Description of prop "source".
   */
  source: object.isRequired,
};

const defaultProps = {
  shape: 'circle',
  size: 'medium',
  borderColor: undefined,
  borderThickness: 0,
  placeholder: undefined,
  source: {},
};

const getShape = (shape) => {
  if (shape === 'circle') {
    return Styles.avatarCircle;
  }
  return Styles.avatarSquare;
};

const getSize = (size) => {
  if (size === 'large') {
    return Styles.avatarLarge;
  } else if (size === 'small') {
    return Styles.avatarSmall;
  }
  return Styles.avatarMedium;
};

/**
 * Avatar component description.
 */
const Avatar = props => (
  <Image
    source={props.source ? { uri: props.source } : props.placeholder}
    style={[
      Styles.avatar,
      !!props.borderThickness && { border: `${props.borderThickness} solid` },
      !!props.borderColor && { borderColor: props.borderColor },
      !!props.shape && getShape(props.shape),
      !!props.size && getSize(props.shape),
    ]}
  />
);

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
