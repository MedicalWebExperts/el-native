import React, { Component } from 'react';
import { TouchableOpacity, Text, Dimensions, Animated } from 'react-native';
import { string, oneOf, func, number } from 'prop-types';

import colors from '../Theme/colors';

const { width } = Dimensions.get('window');

const propTypes = {
  text: string.isRequired,
  position: oneOf(['bottom', 'top']),
  duration: number,
  onPress: func,
};
const defaultProps = {
  position: 'bottom',
  onPress: () => {},
  duration: 1000,
};

const styles = {
  snackWrapper: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primary,
    width: width * 0.95,
    left: width * 0.025,
    right: width * 0.025,
    height: 48,
    padding: 12,
    borderRadius: 8,
  },
  text: {
    color: colors.white,
  },
  button: {},
};

class Snackbar extends Component {
  state = {
    fadeAnim: new Animated.Value(0),
  };

  componentDidMount() {
    this.show();
  }

  onPress = () => {
    this.hide();
    this.props.onPress();
  };

  hide = () => {
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: this.props.duration,
    }).start();
  };

  show = () => {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: this.props.duration,
    }).start();
  };

  render() {
    const { fadeAnim } = this.state;
    return (
      <Animated.View
        style={[
          styles.snackWrapper,
          this.props.position === 'top' ? { top: 48 } : { bottom: 24 },
          { opacity: fadeAnim },
        ]}
      >
        <Text style={styles.text}>{this.props.text}</Text>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text style={styles.text}>OK</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

Snackbar.propTypes = propTypes;
Snackbar.defaultProps = defaultProps;

export default Snackbar;
