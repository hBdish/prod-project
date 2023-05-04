import {lazy} from "react";

const AboutPageLazy = lazy(() => import('./about-page')
  .then(module => ({default:module.AboutPage})))

export {AboutPageLazy as AboutPage}
