import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets';
import { AppRouteProps, routeConfig } from 'shared/config';
import { RequireAuth } from 'app/providers/router/ui/require-auth';

function AppRouter() {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>

        {route.element}

      </Suspense>
    );
    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
      />
    );
  }, []);

  return (
    <Routes>
      {Object.values(routeConfig).map(renderWithWrapper)}
    </Routes>

  );
}

export { AppRouter };
