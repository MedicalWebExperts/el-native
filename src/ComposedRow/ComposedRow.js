import React from 'react';
import { func, string, object, number, oneOf } from 'prop-types';

import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';
import { Row, Col } from '../Layout/Layout';
import { H2, H4, H5 } from '../Typography/Typography';
import Theme from '../Theme';

const theme = Theme.getTheme();
const styles = theme.composedRow;

const propTypes = {
  /**
   * Custom styling for ComposedRow
   */
  rowStyle: object,
  /**
   * Function to execute when ComposedRow is pressed
   */
  onPress: func,
  /**
   * Avatar image to show on the left of the ComposedRow
   */
  avatar: string,
  /**
   * Size of the Avatar in string. Default: "medium".
   */
  avatarSize: oneOf(['small', 'medium', 'large']),
  /**
   * When present expects a string indicating which icon to show on the left (instead of Avatar).
   */
  leftIcon: string,
  /**
   * Custom styles for leftIcon (mainly used for color)
   */
  leftIconStyle: object,
  /**
   * Size of leftIcon in number. Default: 40
   */
  leftIconSize: number,
  /**
   * Main text of ComposedRow
   */
  title: string,
  /**
   * Secondary text of ComposedRow
   */
  subTitle: string,
  /**
   * Little Icon shown under the subtitle
   */
  subTitleIcon: string,
  /**
   * Custom styles for subTitleIcon
   */
  subTitleIconStyle: object,
  /**
   * Small font text shown under subtitle and right to subTitleIcon
   */
  subTitleText: string,
  /**
   * Big action Icon shown on the extreme right of ComposedRow
   */
  rightIcon: string,
  /**
   * Custom style for rightIcons
   */
  rightIconStyle: object,
  /**
   * Function to execute when rightIcon is pressed
   */
  rightIconOnPress: func,
  /**
   * Small font text shown below rightIcon
   */
  rightText: string,
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
        {!!props.avatar && <Avatar source={props.avatar} size={props.avatarSize} />}
        {!!props.leftIcon && (
          <Icon style={props.leftIconStyle} size={props.leftIconSize} name={props.leftIcon} />
        )}
      </Col>
    )}
    {(!!props.title || !!props.subTitle || !!props.subTitleIcon || !!props.subTitleText) && (
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
                <Icon style={props.subTitleIconStyle} size={20} name={props.subTitleIcon} />
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
