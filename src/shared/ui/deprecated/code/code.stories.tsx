import type { Meta, StoryObj } from '@storybook/react';

import { Code } from './code';

const meta: Meta<typeof Code> = {
  title: 'shared/Code',
  component: Code,
  args: {},
};

export default meta;

type Story = StoryObj<typeof Code>;

export const Primary: Story = {
  args: {
    codeChildren:
      "import type { Meta, StoryObj } from '@storybook/react';\n" +
      '\n' +
      "import { Code } from './code';\n" +
      '\n' +
      'const meta: Meta<typeof Code> = {\n' +
      "  title: 'shared/Code',\n" +
      '  component: Code,\n' +
      '  args: {},\n' +
      '};\n' +
      '\n' +
      'export default meta;\n' +
      '\n' +
      'type Story = StoryObj<typeof Code>;\n' +
      '\n' +
      'export const Primary: Story = {\n' +
      '  args: {\n' +
      "    codeChildren: 'saf',\n" +
      '  },\n' +
      '};',
  },
};
