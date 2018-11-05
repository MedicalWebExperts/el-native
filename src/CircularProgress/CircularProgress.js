import React from 'react';
import { View } from 'react-native';
import { number, string } from 'prop-types';
// import LinearGradient from 'react-native-linear-gradient';

import { H1 } from '../Typography/Typography';

import Theme from '../Theme';
import ThemeColors from '../Theme/colors';

const theme = Theme.getTheme();
const baseStyles = theme.circularProgress;

const propTypes = {
  size: number.isRequired,
  border: number,
  backgroundColor: string.isRequired,
  text: string,
  innerText: string,
  textColor: string,
  // colors: array.isRequired,
};

const defaultProps = {
  border: 20,
  textColor: null,
  text: null,
  innerText: null,
};

const getStyles = ({ size, border, textColor }) => {
  baseStyles.linearGradient = {
    ...baseStyles.linearGradient,
    height: size,
    width: size,
    borderRadius: size * 0.5,
  };
  baseStyles.innerView = {
    ...baseStyles.innerView,
    height: size - border,
    width: size - border,
    borderRadius: (size - border) * 0.5,
  };
  baseStyles.innerText = {
    fontSize: size * 0.3,
    color: textColor || ThemeColors.text,
  };
  baseStyles.outerText = {
    fontSize: size * 0.1,
    color: textColor || ThemeColors.text,
  };
  return baseStyles;
};

const CircularProgress = (props) => {
  const { size, border, textColor } = props;
  const styles = getStyles({ size, border, textColor });

  // Magic to work on android with only 1 color in array.
  // const colors = props.colors.length > 1 ? props.colors : [...props.colors, ...props.colors];

  return (
    <View style={styles.wrapper}>
      {/* <LinearGradient colors={colors} style={styles.linearGradient}> */}
      <View style={[styles.innerView, { backgroundColor: props.backgroundColor }]}>
        {props.innerText && <H1 style={styles.innerText}>{props.innerText}</H1>}
      </View>
      {/* </LinearGradient> */}
      {props.text && (
        <View style={styles.textWrapper}>
          <H1 style={styles.outerText}>{props.text}</H1>
        </View>
      )}
    </View>
  );
};

CircularProgress.propTypes = propTypes;
CircularProgress.defaultProps = defaultProps;

export default CircularProgress;
