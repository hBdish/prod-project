## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:
- `npm run storybook`

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook';
import { Button, ButtonSize, ButtonTheme } from './button';
import { Theme } from '@/shared';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Text',
  },
};

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};

export const Background: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const SquareM: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
  },
};
```
