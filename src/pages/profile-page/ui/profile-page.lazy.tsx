import { lazy } from 'react';

const ProfilePageLazy = lazy(() => import('./profile-page').then((module) => ({ default: module.ProfilePage })));

export { ProfilePageLazy as ProfilePage };
