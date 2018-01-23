import React from 'react';
import renderer from 'react-test-renderer';

import { Grid, Row, Col } from './Layout';

const props = {
  children: [],
};

const childProps = {
  children: [],
  onPress: () => {},
};

describe('Layout Snapshots', () => {
  it('should render a Grid with Cols', () => {
    const component = renderer.create(
      <Grid {...props}>
        <Col {...childProps} style={{ backgroundColor: 'pink' }} />
        <Col {...childProps} style={{ backgroundColor: 'red' }} size={2} />
        <Col {...childProps} style={{ backgroundColor: 'yellow' }} size={3} />
      </Grid>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a Grid with Rows', () => {
    const component = renderer.create(
      <Grid {...props}>
        <Row {...childProps} style={{ backgroundColor: 'pink' }} />
        <Row {...childProps} style={{ backgroundColor: 'pink' }} size={2} />
        <Row {...childProps} style={{ backgroundColor: 'pink' }} size={3} />
      </Grid>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render an Grid with Combined Rows and Cols', () => {
    const component = renderer.create(
      <Grid>
        <Row {...childProps}>
          <Col {...childProps} style={{ backgroundColor: 'pink' }} />
          <Col {...childProps} style={{ backgroundColor: 'pink' }} size={2} />
          <Col {...childProps} size={3}>
            <Row {...childProps} style={{ backgroundColor: 'pink' }} />
            <Row {...childProps} style={{ backgroundColor: 'pink' }} />
          </Col>
        </Row>
        <Row {...childProps}>
          <Col {...childProps} style={{ backgroundColor: 'pink' }} />
          <Col {...childProps} style={{ backgroundColor: 'pink' }} size={2} />
          <Col {...childProps} style={{ backgroundColor: 'pink' }} size={3} />
        </Row>
      </Grid>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
