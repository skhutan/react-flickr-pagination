import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import preset from '@rebass/preset';
import Content from './components/Content';

export default () => (
  <ThemeProvider theme={preset}>
    <Content />
  </ThemeProvider>
);
