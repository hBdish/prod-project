import { lazy } from 'react';

const AdminPanelPageLazy = lazy(() => import('./admin-panel-page')
  .then((module) => ({ default: module.AdminPanelPage })));

export { AdminPanelPageLazy as AdminPanelPage };
