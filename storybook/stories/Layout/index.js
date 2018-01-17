import React from 'react';

import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import { Grid, Col, Row } from '../../../src';

storiesOf('Layout', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Cols', () => (
    <Grid>
      <Row>
        <Col style={{ backgroundColor: '#C769CD' }} size={1} />
        <Col style={{ backgroundColor: '#CB4A40' }} size={2} />
        <Col style={{ backgroundColor: '#D7C563' }} size={3} />
      </Row>
      <Row style={{ backgroundColor: '#CB4A40' }} />
      <Row style={{ backgroundColor: '#D7C563' }} />
    </Grid>
  ))
  .add('Rows', () => (
    <Grid>
      <Row style={{ backgroundColor: '#C769CD' }} size={1} />
      <Row style={{ backgroundColor: '#CB4A40' }} size={3} />
      <Row style={{ backgroundColor: '#D7C563' }} size={6} />
    </Grid>
  ));
