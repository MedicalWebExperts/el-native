import React from 'react';
import { func, string } from 'prop-types';

import Icon from '../Icon/Icon';
import Avatar from '../Avatar/Avatar';
import { Row, Col } from '../Layout/Layout';
import { H2, H4 } from '../Typography/Typography';
import Theme from '../Theme';

const theme = Theme.getTheme();
const styles = theme.button;

const propTypes = {
  onPress: func.isRequired,
  avatar: string,
  leftIcon: string,
  title: string.isRequired,
  subTitle: string.isRequired,
  subTitleIcon: string,
  subTitleText: string,
  rightIcon: string,
  rightText: string,
};
const defaultProps = {
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
  <Row onPress={props.onPress}>
    <Col>
      {!!props.avatar && <Avatar style={styles.icon} />}
      {!!props.leftIcon && <Icon style={styles.icon} />}
    </Col>
    <Col size={2}>
      <Row>{!!props.title && <H2 style={styles.title} numberOfLines={1} />}</Row>
      <Row>{!!props.subTitle && <H4 style={styles.subTitle} />}</Row>
      <Row>
        <Col>{!!props.subTitleIcon && <H4 style={styles.subTitleIcon} />}</Col>
        <Col>{!!props.subTitleText && <H4 style={styles.subTitle} />}</Col>
      </Row>
    </Col>
    <Col>
      <Row>{!!props.rightIcon && <Icon style={styles.icon} />}</Row>
      <Row>{!!props.rightText && <Icon style={styles.icon} numberOfLines={1} />}</Row>
    </Col>
  </Row>
);

ComposedRow.propTypes = propTypes;
ComposedRow.defaultProps = defaultProps;

export default ComposedRow;
