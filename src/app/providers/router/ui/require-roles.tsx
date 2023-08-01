import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { RoutePath } from '@/shared/config';
import { getUserRoles } from '@/entities';
import { UserRole } from '@/entities/user/model/const/userConst';

interface RequireProps {
  children: JSX.Element,
  roles?: UserRole[]
}

function RequireRoles({ children, roles }: RequireProps) {
  const userRoles = useSelector(getUserRoles);
  const location = useLocation();

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((requireRole) => {
      const hasRole = userRoles?.includes(requireRole);
      return hasRole;
    });
  }, [roles, userRoles]);

  if (!hasRequiredRoles) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return children;
}

export { RequireRoles };
