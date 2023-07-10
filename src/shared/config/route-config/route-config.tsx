import { RouteProps } from 'react-router-dom';
import {
  AboutPage, MainPage, NotFoundPage, ProfilePage, ArticleDetailsPage, ArticlePage,
} from 'pages';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean
}

enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLE = 'articles',
  ARTICLE_DETAILS = 'articles_details',

  // last
  NOT_FOUND = 'not_found',
}

const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.ARTICLE]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/',

  // last
  [AppRoutes.NOT_FOUND]: '*',
};

const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE]: {
    path: RoutePath.articles,
    element: <ArticlePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${RoutePath.articles_details}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },

  // last
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};

export { routeConfig, RoutePath };
