import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '@/widgets';
import { RequireAuth } from '../ui/require-auth';
import { RequireRoles } from '../ui/require-roles';
import { AppRouteProps } from '@/shared';
import { routeConfig } from '../config/route-config';

function AppRouter() {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = (
      <Suspense
        key={route.path}
        fallback={<PageLoader />}
      >
        {route.element}
      </Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? (
            <RequireAuth>
              <RequireRoles roles={route.roles}>{element}</RequireRoles>
            </RequireAuth>
          ) : (
            element
          )
        }
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
}

export { AppRouter };
