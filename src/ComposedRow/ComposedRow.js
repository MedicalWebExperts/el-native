import React from 'react';
import { func, string, oneOfType, object, number } from 'prop-types';

import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';
import { Row, Col } from '../Layout/Layout';
import { H2, H4, H5 } from '../Typography/Typography';
import Theme from '../Theme';

const theme = Theme.getTheme();
const styles = theme.composedRow;

const propTypes = {
  rowStyle: object,
  onPress: func,
  avatar: oneOfType([string, func]),
  avatarSize: string,
  leftIcon: string,
  title: string,
  subTitle: string,
  subTitleIcon: string,
  subTitleText: string,
  rightIcon: string,
  rightIconOnPress: func,
  rightText: string,
  leftIconStyle: object,
  leftIconSize: number,
  subTitleIconStyle: object,
  rightIconStyle: object,
};
const defaultProps = {
  rowStyle: {},
  onPress: () => {},
  avatar: '',
  avatarSize: 'medium',
  leftIcon: '',
  title: '',
  subTitle: '',
  subTitleIcon: '',
  subTitleText: '',
  rightIcon: '',
  rightIconOnPress: () => {},
  rightText: '',
  leftIconStyle: {},
  leftIconSize: 40,
  subTitleIconStyle: {},
  rightIconStyle: {},
};

const ComposedRow = props => (
  <Row style={props.rowStyle} onPress={props.onPress}>
    {(!!props.avatar || !!props.leftIcon) && (
      <Col size={1} style={styles.centeredContent}>
        {!!props.avatar && (
          <Avatar source={props.avatar} size={props.avatarSize} />
        )}
        {!!props.leftIcon && (
          <Icon
            style={props.leftIconStyle}
            size={props.leftIconSize}
            name={props.leftIcon}
          />
        )}
      </Col>
    )}
    {(!!props.title ||
      !!props.subTitle ||
      !!props.subTitleIcon ||
      !!props.subTitleText) && (
      <Col size={3}>
        {!!props.title && (
          <Row size={2} style={styles.leftContent}>
            <H2 numberOfLines={1}>{props.title}</H2>
          </Row>
        )}
        {!!props.subTitle && (
          <Row size={3} style={styles.leftContent}>
            <H4>{props.subTitle}</H4>
          </Row>
        )}

        {(!!props.subTitleIcon || !!props.subTitleText) && (
          <Row size={2} style={styles.leftContent}>
            {!!props.subTitleIcon && (
              <Col size={1}>
                <Icon
                  style={props.subTitleIconStyle}
                  size={20}
                  name={props.subTitleIcon}
                />
              </Col>
            )}
            {!!props.subTitleText && (
              <Col size={6}>
                <H5>{props.subTitleText}</H5>
              </Col>
            )}
          </Row>
        )}
      </Col>
    )}
    {(!!props.rightIcon || !!props.rightText) && (
      <Col size={1}>
        {!!props.rightIcon && (
          <Row
            style={{
              ...styles.centeredContent,
              alignItems: props.rightText ? 'flex-end' : 'center',
            }}
          >
            {!!props.rightIcon &&
              !!props.rightIconOnPress && (
                <Button
                  style={props.rightIconStyle}
                  transparent
                  onPress={props.rightIconOnPress}
                  icon={props.rightIcon}
                />
              )}
          </Row>
        )}
        {!!props.rightText && (
          <Row
            style={{
              ...styles.centeredContent,
              alignItems: props.rightIcon ? 'flex-start' : 'center',
            }}
          >
            {!!props.rightText && <H5 numberOfLines={1}>{props.rightText}</H5>}
          </Row>
        )}
      </Col>
    )}
  </Row>
);

ComposedRow.propTypes = propTypes;
ComposedRow.defaultProps = defaultProps;

export default ComposedRow;
