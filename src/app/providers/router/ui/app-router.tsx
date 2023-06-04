import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutPage, MainPage } from 'pages';
import { routeConfig } from 'shared/config';

function AppRouter() {
  return (
    <Suspense fallback={<div>LOADING</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={(
              <div className="page-wrapper">
                {element}
              </div>
        )}
          />
        ))}
      </Routes>
    </Suspense>
  );
}

export { AppRouter };
