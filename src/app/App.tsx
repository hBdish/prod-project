import {Suspense } from "react";
import './styles/index.scss';
import {AppRouter, useTheme} from "app/providers";
import {classNames} from "shared/lib";
import {Navbar, Sidebar} from "widgets";


const App = () => {
  const { theme } = useTheme()

   return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
      <Navbar/>
      <div className="content-page">
        <Sidebar/>
        <AppRouter />
      </div>
      </Suspense>
    </div>
  );
};

export {App};
