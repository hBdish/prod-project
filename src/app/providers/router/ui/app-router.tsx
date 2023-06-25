import { Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config';
import { PageLoader } from 'widgets';
import { useSelector } from 'react-redux';
import { getAuthData } from 'entities/user';

function AppRouter() {
  const isAuth = useSelector(getAuthData);

  const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
    if (route.authOnly && !isAuth) {
      return false;
    }
    return true;
  }), [isAuth]);

  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={(
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">
                {element}
              </div>
            </Suspense>
        )}
        />
      ))}
    </Routes>

  );
}

export { AppRouter };
