import React from 'react';
import { string, number, bool, oneOf, object, func } from 'prop-types';
import { TextInput, Text, View } from 'react-native';

import Theme from '../Theme';

const theme = Theme.getTheme();
const styles = theme.input;

const propTypes = {
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
  multiline: bool,
  /**
   * Determines the number of lines of the Text Area. The default is 4.
   */
  numberOfLines: number,
  /**
   * Boolean that allows the Input to autocorrect the text user is typing, defaulted to "false".
   */
  autoCorrect: bool,
  /**
   * If "false" the Input will be readonly. The default is "true".
   */
  editable: bool,
  /**
   * Selects text on focus with this prop. Default is "false".
   */
  selectTextOnFocus: bool,
  /**
   * Boolean that gives an error styling and conditions the errorText to be present.
   */
  error: bool,
  /**
   * Shows a provided text under the Input to give more clarity on the kind of error.
   */
  errorText: string,
  /**
   * Prop for custom styling.
   */
  style: object,
  /**
   * Predefined shapes, our customized Inputs. It could be one of "underline", "squared" or
   * "rounded". The default is "underline".
   */
  type: oneOf(['underline', 'squared', 'rounded']),
  /**
   * Prop for changing the placeholder color.
   */
  placeholderTextColor: string,
  /**
   * Function to be executed when input is focused.
   */
  onFocus: func,
  /**
   * Value of the Input
   */
  value: string,
};

const defaultProps = {
  placeholder: 'Placeholder text',
  onChangeText: () => {},
  multiline: false,
  numberOfLines: 4,
  autoCorrect: false,
  editable: true,
  selectTextOnFocus: false,
  error: false,
  errorText: 'Error text',
  style: {},
  type: 'underline',
  placeholderTextColor: theme.colors.text,
  onFocus: () => {},
  value: '',
};

const defaultStyles = (error, type) => {
  let customStyles = styles.base;
  if (error) {
    customStyles = { ...customStyles, ...styles.error };
  }
  if (type) {
    switch (type) {
      case 'rounded':
        return { ...customStyles, ...styles.rounded };
      case 'squared':
        return { ...customStyles, ...styles.squared };
      default:
        return customStyles;
    }
  }
  return customStyles;
};

/**
 * Input component is a wrapper over React Native Input with 3 predefined styles added
 * and the possibility of further customizing.
 */

const Input = (props) => {
  const {
    placeholder,
    multiline,
    numberOfLines,
    autoCorrect,
    editable,
    selectTextOnFocus,
    error,
    errorText,
    style,
    placeholderTextColor,
    onFocus,
    value,
    onChangeText,
    type,
  } = props;

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        multiline={multiline}
        numberOfLines={numberOfLines}
        autoCorrect={autoCorrect}
        editable={editable}
        selectTextOnFocus={selectTextOnFocus}
        style={[defaultStyles(error, type), style]}
        placeholderTextColor={placeholderTextColor}
        underlineColorAndroid="transparent"
        onFocus={onFocus}
      />
      <Text style={styles.errorText}>{error && !!errorText && errorText}</Text>
    </View>
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
