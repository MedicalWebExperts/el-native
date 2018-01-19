import React, { Component } from 'react';
import { string, number, bool, oneOf, object } from 'prop-types';
import { Input as RNInput } from 'react-native';

import colors from '../styles/colors';

class Input extends Component {
  static propTypes = {
    /**
     * What Input to show, see Input Explorer app or one of the links above. Default: heart.
     */
    name: string,
    /**
     * Color of the Input. Default: Theme white color.
     */
    value: string,
    /**
     * Shows a placeholder with the provided value.
     */
    placeholder: string,
    /**
     * This prop expects a function that will be executed when the user types.
     */
    onChangeText: func,
    /**
     * Shows the Input as a Text Area.
     */
    textArea: bool,
    /**
     * Determines the number of lines of the Text Area. The default is 4.
     */
    numberOfLines: number,
    /**
     * Boolean that allows the Input to autocorrect the text user is typing, defaulted to "false".
     */
    autoCorrect: bool,
    /**
     * Determines whether the Input is readonly. The default is "false".
     */
    editable: bool,
    /**
     * Selects text on focus with this prop. Default is "false".
     */
    selectTextOnFocus: bool,
    /**
     * Shows predefined error styling when passed "true". Defaulted to "false".
     */
    error: bool,
    /**
     * Shows a provided text under the Input to give more clarity on the kind of error.
     * If prop not used, no text will appear.
     */
    errorText: string,
    /**
     * Prop for custom styling.
     */
    style: object,
    /**
     * Predefined shapes, our customized Inputs. It could be one of "underline", "square" or
     * "rounded". The default is "underline".
     */
    type: oneOf(['underline', 'square', 'rounded']),
  };

  static defaultProps = {
    name: 'ios-heart',
    value: '',
    placeholder: 'Placeholder text',
    onChangeText: () => {},
    textArea: false,
    numberOfLines: 4,
    autoCorrect: false,
    editable: false,
    selectTextOnFocus: false,
    error: false,
    errorText: 'Error Text',
    style: {},
    type: 'underline',
  };

  /**
   * Input component is a wrapper over React Native Input with 3 predefined styles added
   * and the possibility of further customizing.
   */

  handleChangeContent = (text) => {};

  render() {
    const { value } = this.state;
    const {
      name,
      placeholder,
      textArea,
      numberOfLines,
      autoCorrect,
      editable,
      selectTextOnFocus,
      error,
      errorText,
      style,
      type,
    } = this.props;

    return (
      <RNInput
        name={name}
        value={value}
        placeholder={placeholder}
        onChangeText={text => this.handleChangeContent(text)}
        multiline={textArea}
        numberOfLines={numberOfLines}
        autoCorrect={autoCorrect}
        editable={editable}
        selectTextOnFocus={selectTextOnFocus}
        error={error}
        errorText={errorText}
        style={style}
        type={type}
      />
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
