import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppRouter } from './providers/router/ui/app-router';
import { classNames, useAppDispatch } from '@/shared/lib';
import { Navbar, PageLoader, Sidebar } from '@/widgets';
import { initAuthData, userInitedSelector } from '@/entities';
import { useTheme } from '@/shared/lib/hooks/use-theme/use-theme';

function App() {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const inited = useSelector(userInitedSelector);

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  if (!inited) {
    return <PageLoader />;
  }

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
}

export { App };
