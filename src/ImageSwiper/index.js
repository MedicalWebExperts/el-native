import React, { PropTypes } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

import styles from './styles';

const proptypes = {
  images: PropTypes.array.isRequired,
  style: PropTypes.object,
};

const defaultProps = {
  images: [],
  styles: {},
};

function ImageSwiper({ images, style }) {
  const stylesCommon = style ? StyleSheet.flatten([styles, style]) : styles;
  const swiper = (
    <View>
      <Swiper
        style={stylesCommon.wrapper} height={240}
        dot={<View style={stylesCommon.dot} />}
        activeDot={<View style={stylesCommon.activeDot} />}
        paginationStyle={stylesCommon.paginationStyle}
        autoplay
      >
        {images.map(image =>
          <View style={stylesCommon.slide}>
            <Image
              resizeMode="stretch"
              style={stylesCommon.image}
              source={image}
            />
          </View>)
        }
      </Swiper>
    </View>
  );
  return swiper;
}

ImageSwiper.proptypes = proptypes;
ImageSwiper.defaultProps = defaultProps;

export default ImageSwiper;
