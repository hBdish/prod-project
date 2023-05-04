import {Suspense, useContext} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageLazy, MainPageLazy} from "../pages";
import '../styles/index.scss'
import {useTheme} from "../theme/useTheme";
import {classNames} from "../helpers";


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
            <AboutPageLazy/>
          </Suspense>
        }/>
        <Route path={'/'} element={
          <Suspense fallback={<div>Loading</div>}>
          <MainPageLazy/>
          </Suspense>
        }
        />
      </Routes>
    </div>
  );
};

export {App};
