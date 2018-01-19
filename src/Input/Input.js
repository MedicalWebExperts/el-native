import React, { Component } from 'react';
import { string, number, bool, oneOf, object, func } from 'prop-types';
import { TextInput, Text, View } from 'react-native';

import styles from './styles';

/**
 * Input component is a wrapper over React Native Input with 3 predefined styles added
 * and the possibility of further customizing.
 */

class Input extends Component {
  static propTypes = {
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
     * Predefined shapes, our customized Inputs. It could be one of "underline", "squared" or
     * "rounded". The default is "underline".
     */
    type: oneOf(['underline', 'squared', 'rounded']),
  };

  static defaultProps = {
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

  state = {
    value: '',
  };

  handleChangeContent = (text) => {
    this.setState({ value: text });
    if (this.props.onChangeText) this.props.onChangeText(text);
  };

  defaultStyles = () => {
    const customStyles = [];
    if (this.props.error) {
      customStyles.push(...styles.error);
    }
    if (this.props.type) {
      switch (this.props.type) {
        case 'rounded':
          customStyles.push(...styles.rounded);
          break;
        case 'squared':
          customStyles.push(...styles.squared);
          break;
        default:
          customStyles.push(...styles.underline);
      }
    }
    return customStyles;
  };

  render() {
    const { value } = this.state;
    const {
      placeholder,
      textArea,
      numberOfLines,
      autoCorrect,
      editable,
      selectTextOnFocus,
      errorText,
      style,
    } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={text => this.handleChangeContent(text)}
          multiline={textArea}
          numberOfLines={numberOfLines}
          autoCorrect={autoCorrect}
          editable={editable}
          selectTextOnFocus={selectTextOnFocus}
          style={[...this.defaultStyles(), ...style]}
        />
        <Text>{!!errorText && errorText}</Text>
      </View>
    );
  }
}

export default Input;
