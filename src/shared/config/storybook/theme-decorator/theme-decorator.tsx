import { Story } from '@storybook/react';
import { classNames } from 'shared';
import { Theme, ThemeProvider } from 'app/providers';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <ThemeProvider initialTheme={theme}>
    <div className={classNames('app', {}, [theme])}>
      <StoryComponent />
    </div>
  </ThemeProvider>
);
