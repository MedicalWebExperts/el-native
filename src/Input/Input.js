import React from 'react';
import { string, number, bool, oneOf, object } from 'prop-types';
import { Input as RNInput } from 'react-native';

import colors from '../styles/colors';

const propTypes = {
  /**
   * Color of the Input. Default: Theme white color.
   */
  color: string,
  /**
   * Size of the Input. Default: 16.
   */
  size: number,
  /**
   * What Input to show, see Input Explorer app or one of the links above. Default: heart.
   */
  name: string,
  /**
   * Shows the Input as a Text Area.
   */
  textArea: bool,
  /**
   * Shows a placeholder with the passed value.
   */
  placeholder: string,
  selectTextOnFocus: bool,
  error: bool,
  errorText: string,
  style: object,
  type: oneOf(['underline', 'square', 'rounded']),
};

const defaultProps = {
  color: colors.white,
  size: 16,
  name: 'ios-heart',
  textArea: false,
  placeholder: '',
  selectTextOnFocus: false,
  error: false,
  errorText: 'Error Text',
  style: {},
  type: 'underline',
};

const Input = props => (
  <RNInput
    name="content"
    value={this.state.content}
    placeholder={props.placeholder}
    onChangeText={text => this.handleChangeContent(text)}
    multiline={props.textArea}
    autoCorrect={false}
    editable={false}
    selectTextOnFocus={false}
    error
    errorText
    style
    type
  />
);

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
