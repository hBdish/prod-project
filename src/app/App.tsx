import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppRouter } from './providers/router/ui/app-router';
import { classNames, ToggleFeatures, useAppDispatch } from '@/shared/lib';
import { Navbar, PageLoader, Sidebar } from '@/widgets';
import { initAuthData, userInitedSelector } from '@/entities';
import { useTheme } from '@/shared/lib/hooks/use-theme/use-theme';
import { MainLayout } from '@/shared';

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
    <ToggleFeatures
      name="isAppRedesigned"
      on={
        <div className={classNames('app_redesigned', {}, [theme])}>
          <MainLayout
            header={<Navbar />}
            content={<AppRouter />}
            sidebar={<Sidebar />}
            toolbar={<div>123</div>}
          />
        </div>
      }
      off={
        <div className={classNames('app', {}, [theme])}>
          <Suspense fallback="">
            <Navbar />
            <div className="content-page">
              <Sidebar />
              <AppRouter />
            </div>
          </Suspense>
        </div>
      }
    />
  );
}

export { App };
