/* eslint no-console: ["error", { allow: ["error"] }] */
import React from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import { View, Image, Text, Dimensions, Platform, TouchableHighlight, Linking } from 'react-native';

import Styles from './styles';

const propTypes = {
  /**
   * Description of prop "latitude".
   */
  latitude: PropTypes.number.isRequired,
  /**
   * Description of prop "longitude".
   */
  longitude: PropTypes.number.isRequired,
  /**
   * Description of prop "width".
   */
  width: PropTypes.number,
  /**
   * Description of prop "height".
   */
  height: PropTypes.number,
  /**
   * Description of prop "apiKey".
   */
  apiKey: PropTypes.string.isRequired,
  maptype: PropTypes.string,
  zoom: PropTypes.number, // eslint-disable-line react/no-unused-prop-types
  onPress: PropTypes.func,
  style: PropTypes.object,
  button: PropTypes.element, // eslint-disable-line react/no-unused-prop-types
  underlayColor: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
};

const defaultProps = {
  width: undefined,
  height: undefined,
  maptype: 'roadmap',
  zoom: 18,
  onPress: undefined,
  style: {},
  button: undefined,
  underlayColor: 'white',
};

/**
 * Map component description.
 */
export default function Map(props) {
  const dims = Dimensions.get('window');

  const computedDimensions = {
    width: Math.round(props.width || dims.width),
    height: Math.round(props.height || dims.width * (2 / 3)),
  };

  const googleStaticMapUri = () => {
    const baseUrl = 'https://maps.googleapis.com/maps/api/staticmap';
    const { apiKey } = props;
    const params = {
      markers: [props.latitude, props.longitude].join(','),
      maptype: props.maptype,
      size: [computedDimensions.width, computedDimensions.height].join('x'),
      scale: 2,
      apiKey,
    };
    const query = qs.stringify(params, { arrayFormat: 'brackets' });
    const url = `${baseUrl}?${query}`;
    return url;
  };

  const handleOnPress = () => {
    const generateIos = () =>
      `https://maps.apple.com/?q=${props.latitude},${props.longitude}&z=${props.zoom}`;
    const generateAndroid = () => `geo:${props.latitude},${props.longitude}`;

    const url = Platform.select({
      ios: generateIos,
      android: generateAndroid,
    })();

    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          console.error(`Can't handle url: ${url}`);
          return;
        }
        Linking.openURL(url);
      })
      .catch(err => console.error('An error occurred', err));
  };

  const onPress =
    props.onPress && typeof props.onPress === 'function' ? props.onPress : handleOnPress;

  const renderButton = () => (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={props.underlayColor}
      style={{ ...Styles.button, ...props.style.button }}
    >
      <View>{props.button || <Text>Navigate</Text>}</View>
    </TouchableHighlight>
  );

  return (
    <View style={{ ...Styles.container, ...props.style.container }}>
      <Image
        source={{
          uri: googleStaticMapUri(),
        }}
        style={computedDimensions}
      />
      {renderButton()}
    </View>
  );
}

Map.propTypes = propTypes;
Map.defaultProps = defaultProps;
