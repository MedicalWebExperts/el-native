import React from 'react';

import CircularProgress from './CircularProgress';

import { shouldHaveText } from '../utils/tests';
import Theme from '../Theme';

const theme = Theme.getTheme();

describe('CircularProgress Snapshots', () => {
  it('should render a text', () => {
    shouldHaveText(
      <CircularProgress
        size={200}
        backgroundColor={theme.colors.light}
        colors={[theme.colors.primary, theme.colors.secondary]}
        text="TEXT"
      />,
      'TEXT',
    );
  });

  it('should render an inner text', () => {
    shouldHaveText(
      <CircularProgress
        size={200}
        backgroundColor={theme.colors.light}
        colors={[theme.colors.primary, theme.colors.secondary]}
        innerText="In"
      />,
      'In',
    );
  });

  it('should render an inner text', () => {
    shouldHaveText(
      <CircularProgress
        size={200}
        backgroundColor={theme.colors.light}
        colors={[theme.colors.primary]}
        innerText="In"
      />,
      'In',
    );
  });
});
