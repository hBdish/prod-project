import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config';
import { getAuthData } from 'entities/user';

function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useSelector(getAuthData);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return children;
}

export { RequireAuth };
