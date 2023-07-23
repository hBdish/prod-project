import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './list-box';

const meta: Meta<typeof ListBox> = {
  title: 'shared/ListBox',
  component: ListBox,
};

export default meta;

type Story = StoryObj<typeof ListBox>;

export const Default: Story = {
  args: {
    value: 'выберите значение',
    items:
      [
        { value: '1', content: '123' },
        { value: '2', content: '456' },
        { value: '3', content: '789' },
      ],
  },
};

// export const Dark: Story = {
//   args: {
//     placeholder: 'Text',
//   },
//   decorators: [
//     ThemeDecorator(Theme.DARK),
//   ],
// };
