import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppRouter } from './providers/router/ui/app-router';
import { classNames, useAppDispatch } from '@/shared/lib';
import { Navbar, Sidebar } from '@/widgets';
import { userActions, userInitedSelector } from '@/entities';
import { useTheme } from '@/shared/lib/hooks/use-theme/use-theme';

function App() {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const inited = useSelector(userInitedSelector);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

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
