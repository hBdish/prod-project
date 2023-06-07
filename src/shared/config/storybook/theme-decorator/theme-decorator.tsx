import { Story } from '@storybook/react';
import { classNames } from 'shared';
import { Theme } from 'app/providers';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <div className={classNames('app', {}, [theme])}>
    <StoryComponent />
  </div>
);
