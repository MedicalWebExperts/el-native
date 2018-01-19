import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import { Grid, Col, Row } from '../../../src';
import colors from '../styles/colors';

storiesOf('Layout', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Cols', () => (
    <Grid>
      <Col style={{ backgroundColor: colors.pink }} />
      <Col style={{ backgroundColor: colors.red }} size={2} />
      <Col style={{ backgroundColor: colors.yellow }} size={3} />
    </Grid>
  ))
  .add('Rows', () => (
    <Grid>
      <Row style={{ backgroundColor: colors.lightgreen }} />
      <Row style={{ backgroundColor: colors.jade }} size={2} />
      <Row style={{ backgroundColor: colors.turquoise }} size={3} />
    </Grid>
  ))
  .add('Combined', () => (
    <Grid>
      <Row>
        <Col style={{ backgroundColor: colors.lightgreen }} />
        <Col style={{ backgroundColor: colors.jade }} size={2} />
        <Col size={3}>
          <Row style={{ backgroundColor: colors.turquoise }} />
          <Row style={{ backgroundColor: colors.navy }} />
        </Col>
      </Row>
      <Row>
        <Col style={{ backgroundColor: colors.pink }} />
        <Col style={{ backgroundColor: colors.red }} size={2} />
        <Col style={{ backgroundColor: colors.yellow }} size={3} />
      </Row>
    </Grid>
  ));
