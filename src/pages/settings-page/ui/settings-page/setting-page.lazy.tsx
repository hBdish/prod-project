import { lazy } from 'react';

const SettingPageLazy = lazy(() =>
  import('./settings-page').then((module) => ({ default: module.SettingsPage })),
);

export { SettingPageLazy as SettingPage };
