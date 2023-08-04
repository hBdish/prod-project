import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/entities';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean
  roles?: UserRole[]
}
