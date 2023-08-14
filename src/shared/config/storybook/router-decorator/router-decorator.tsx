// eslint-disable-next-line pc-test/layer-imports
import '@/app/styles/index.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (Story: Story) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);
