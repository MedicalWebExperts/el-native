import React from 'react';
import { func, string, oneOfType, object } from 'prop-types';

import Icon from '../Icon/Icon';
import Avatar from '../Avatar/Avatar';
import { Row, Col } from '../Layout/Layout';
import { H2, H4, H5 } from '../Typography/Typography';
import Theme from '../Theme';

const theme = Theme.getTheme();
const styles = theme.composedRow;

const propTypes = {
  rowStyle: object,
  onPress: func,
  avatar: oneOfType(string, func),
  leftIcon: string,
  title: string,
  subTitle: string,
  subTitleIcon: string,
  subTitleText: string,
  rightIcon: string,
  rightText: string,
};
const defaultProps = {
  rowStyle: {},
  onPress: () => {},
  avatar: '',
  leftIcon: '',
  title: '',
  subTitle: '',
  subTitleIcon: '',
  subTitleText: '',
  rightIcon: '',
  rightText: '',
};

const ComposedRow = props => (
  <Row style={props.rowStyle} onPress={props.onPress}>
    {(!!props.avatar || !!props.leftIcon) && (
      <Col size={1}>
        {!!props.avatar && <Avatar source={props.avatar} />}
        {!!props.leftIcon && <Icon style={styles.leftIcon} size={40} name={props.leftIcon} />}
      </Col>
    )}
    {(!!props.title || !!props.subTitle || !!props.subTitleIcon || !!props.subTitleText) && (
      <Col size={2}>
        <Row>
          {!!props.title && (
            <H2 style={styles.title} numberOfLines={1}>
              {props.title}
            </H2>
          )}
        </Row>
        <Row>{!!props.subTitle && <H4>{props.subTitle}</H4>}</Row>
        <Row>
          <Col>
            {!!props.subTitleIcon && (
              <Icon style={styles.subTitleIcon} size={20} name={props.subTitleIcon} />
            )}
          </Col>
          <Col>{!!props.subTitleText && <H5>{props.subTitleText}</H5>}</Col>
        </Row>
      </Col>
    )}
    {(!!props.rightIcon || !!props.rightText) && (
      <Col size={1}>
        <Row style={{ justifyContent: 'center', alignItems: 'flex-end' }} size={1}>
          {!!props.rightIcon && <Icon size={30} name={props.rightIcon} />}
        </Row>
        <Row style={{ justifyContent: 'center', alignItems: 'flex-start' }} size={3}>
          {!!props.rightText && <H5 numberOfLines={1}>{props.rightText}</H5>}
        </Row>
      </Col>
    )}
  </Row>
);

ComposedRow.propTypes = propTypes;
ComposedRow.defaultProps = defaultProps;

export default ComposedRow;
