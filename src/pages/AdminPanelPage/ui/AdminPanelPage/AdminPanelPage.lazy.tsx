import { lazy } from 'react';

const AdminPanelPageLazy = lazy(() => import('./AdminPanelPage')
  .then((module) => ({ default: module.AdminPanelPage })));

export { AdminPanelPageLazy as AdminPanelPage };
