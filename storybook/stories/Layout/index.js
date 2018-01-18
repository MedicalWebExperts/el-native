import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import { Grid, Col, Row } from '../../../src/Layout/Layout';

storiesOf('Layout', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Cols', () => (
    <Grid>
      <Col style={{ backgroundColor: '#C769CD' }} />
      <Col style={{ backgroundColor: '#CB4A40' }} size={2} />
      <Col style={{ backgroundColor: '#D7C563' }} size={3} />
    </Grid>
  ))
  .add('Rows', () => (
    <Grid>
      <Row style={{ backgroundColor: '#8EB568' }} />
      <Row style={{ backgroundColor: '#509D76' }} size={2} />
      <Row style={{ backgroundColor: '#236571' }} size={3} />
    </Grid>
  ))
  .add('Combined', () => (
    <Grid>
      <Row>
        <Col style={{ backgroundColor: '#8EB568' }} />
        <Col style={{ backgroundColor: '#509D76' }} size={2} />
        <Col style={{ backgroundColor: '#236571' }} size={3}>
          <Row style={{ backgroundColor: '#25827B' }} />
          <Row style={{ backgroundColor: '#2F4858' }} />
        </Col>
      </Row>
      <Row>
        <Col style={{ backgroundColor: '#C769CD' }} />
        <Col style={{ backgroundColor: '#CB4A40' }} size={2} />
        <Col style={{ backgroundColor: '#D7C563' }} size={3} />
      </Row>
    </Grid>
  ));
