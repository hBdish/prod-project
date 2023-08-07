import { Story } from '@storybook/react';
import { classNames } from '../../../lib/class-names/class-names';
import { Theme } from '@/shared';
// eslint-disable-next-line pc-test/layer-imports
import { ThemeProvider } from '@/app/providers';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <ThemeProvider initialTheme={theme}>
    <div className={classNames('app', {}, [theme])}>
      <StoryComponent />
    </div>
  </ThemeProvider>
);
