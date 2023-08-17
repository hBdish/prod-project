import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getRouteMain } from '@/shared';
import { authDataSelector } from '@/entities';

function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useSelector(authDataSelector);
  const location = useLocation();

  if (!auth) {
    return (
      <Navigate
        to={getRouteMain()}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
}

export { RequireAuth };
