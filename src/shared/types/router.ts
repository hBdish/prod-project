import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line pc-test/layer-imports
import { UserRole } from '@/entities';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};
