import { Suspense, useEffect } from 'react';
import { AppRouter, useTheme } from 'app/providers';
import { classNames } from 'shared/lib';
import { Navbar, Sidebar } from 'widgets';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, userActions } from 'entities/user';

function App() {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const inited = useSelector(getUserInited);
  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          { inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
}

export { App };
