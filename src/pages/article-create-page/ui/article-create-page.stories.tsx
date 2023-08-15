import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';
import { ArticleCreatePage } from './article-create-page';
import { Theme } from '@/shared';

const meta: Meta<typeof ArticleCreatePage> = {
  title: 'pages/ArticleCreatePage',
  component: ArticleCreatePage,
};

export default meta;

type Story = StoryObj<typeof ArticleCreatePage>;

export const Light: Story = {
  args: {},
  decorators: [StoreDecorator({})],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
