import React from 'react';

import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import { Grid, Col, Row } from '../../../src';

storiesOf('Layout', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Cols', () => (
    <Grid>
      <Col style={{ backgroundColor: '#AFAFAF' }} />
      <Col style={{ backgroundColor: '#FAFAFA' }} />
      <Col style={{ backgroundColor: '#AFAFAF' }} />
    </Grid>
  ))
  .add('Rows', () => (
    <Grid>
      <Row style={{ backgroundColor: '#AFAFAF' }} />
      <Row style={{ backgroundColor: '#FAFAFA' }} />
      <Row style={{ backgroundColor: '#AFAFAF' }} />
    </Grid>
  ));
