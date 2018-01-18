import React from 'react';
import renderer from 'react-test-renderer';

import { Grid, Row, Col } from './Layout';
import colors from '../styles/colors';

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
        <Col {...childProps} style={{ backgroundColor: colors.pink }} />
        <Col {...childProps} style={{ backgroundColor: colors.red }} size={2} />
        <Col {...childProps} style={{ backgroundColor: colors.yellow }} size={3} />
      </Grid>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render a Grid with Rows', () => {
    const component = renderer.create(
      <Grid {...props}>
        <Row {...childProps} style={{ backgroundColor: colors.lightgreen }} />
        <Row {...childProps} style={{ backgroundColor: colors.jade }} size={2} />
        <Row {...childProps} style={{ backgroundColor: colors.turquoise }} size={3} />
      </Grid>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('should render an Grid with Combined Rows and Cols', () => {
    const component = renderer.create(
      <Grid>
        <Row {...childProps}>
          <Col {...childProps} style={{ backgroundColor: colors.lightgreen }} />
          <Col {...childProps} style={{ backgroundColor: colors.jade }} size={2} />
          <Col {...childProps} size={3}>
            <Row {...childProps} style={{ backgroundColor: colors.turquoise }} />
            <Row {...childProps} style={{ backgroundColor: colors.navy }} />
          </Col>
        </Row>
        <Row {...childProps}>
          <Col {...childProps} style={{ backgroundColor: colors.pink }} />
          <Col {...childProps} style={{ backgroundColor: colors.red }} size={2} />
          <Col {...childProps} style={{ backgroundColor: colors.yellow }} size={3} />
        </Row>
      </Grid>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
