import React from 'react';
import { oneOf, oneOfType, string, number, imgSrcPropType, bool } from 'prop-types';
import { Image } from 'react-native';

import Styles from './styles';

const propTypes = {
  /**
   * Description of prop "square".
   */
  square: bool,
  /**
   * Description of prop "size".
   */
  size: oneOf(['large', 'medium', 'small']),
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
  placeholder: oneOfType([string, imgSrcPropType]),
  /**
   * Description of prop "source".
   */
  source: string,
};

const defaultProps = {
  square: false,
  size: 'medium',
  borderColor: '',
  borderThickness: 0,
  placeholder: null,
  source: '',
};

const getSize = (size) => {
  if (size === 'large') {
    return Styles.avatarLarge;
  } else if (size === 'small') {
    return Styles.avatarSmall;
  }
  return false;
};

/**
 * Avatar component description.
 */
const Avatar = props => (
  <Image
    source={props.source ? { uri: props.source } : props.placeholder}
    style={[
      Styles.avatar,
      !!props.borderThickness && { borderWidth: props.borderThickness },
      !!props.borderColor && { borderColor: props.borderColor },
      !!props.size && getSize(props.size),
      !!props.square && Styles.avatarSquare,
    ]}
  />
);

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
