import { configure } from '@storybook/react';
import { themes } from '@storybook/theming';
import React from 'react';
import { addParameters } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import GlobalStyle from '../src/globalstyle';
import { ThemeProvider } from 'styled-components';
import Theme from '../src/theme';

addDecorator((story) => (
  <ThemeProvider theme={Theme}>
    <div>
      <GlobalStyle />
      {story()}
    </div>
  </ThemeProvider>
))

// Option defaults.
addParameters({
  options: {
    theme: themes.normal,
  },
});

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
