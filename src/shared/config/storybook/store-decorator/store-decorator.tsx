import { Story } from '@storybook/react';

import { StoreProvider, Theme, ThemeProvider } from 'app/providers';

export const StoreDecorator = (story: () => Story) => (
  <StoreProvider>
    {story()}
  </StoreProvider>
);
