import { I18nextProvider } from 'react-i18next';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from '@storybook/react';
import i18nForTest from '../../i18n/i18nForTest';

export const LanguageDecorator = (StoryComponent: Story) => (
  <I18nextProvider i18n={i18nForTest}>
    <StoryComponent />
  </I18nextProvider>
);
