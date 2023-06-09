import { Suspense } from 'react';
import { AppRouter, useTheme } from 'app/providers';
import { classNames } from 'shared/lib';
import { Modal, Navbar, Sidebar } from 'widgets';

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export { App };
