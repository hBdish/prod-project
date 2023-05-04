import {Suspense, useContext} from "react";
import {Link, Route, Routes} from "react-router-dom";

import './styles/index.scss';
import {useTheme} from "app/providers";
import {classNames} from "shared/lib";
import {AboutPage, MainPage} from "pages";



const App = () => {
  const { theme, toggleTheme } = useTheme()

   return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={'/'}>Главная страниц</Link>
      <Link to={'/about'}>О сайте</Link>
      <Routes>
        <Route path={'/about'} element={
          <Suspense fallback={<div>Loading</div>}>
            <AboutPage/>
          </Suspense>
        }/>
        <Route path={'/'} element={
          <Suspense fallback={<div>Loading</div>}>
          <MainPage />
          </Suspense>
        }
        />
      </Routes>
    </div>
  );
};

export {App};
