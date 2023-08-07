import {
  AboutPage,
  AdminPanelPage,
  ArticleCreatePage,
  ArticleDetailsPage,
  ArticleEditPage,
  ArticlePage,
  MainPage,
  NotFoundPage,
  ProfilePage,
} from '@/pages';

import { UserRole } from '@/entities/user';
import {
  AppRoutes,
  getRouteAbout,
  getRouteAdminPanel,
  getRouteArticles,
  getRouteArticlesCreate,
  getRouteArticlesDetails,
  getRouteArticlesEdit,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router';
import { AppRouteProps } from '@/shared';

const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: getRouteAbout(),
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(':id'),
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE]: {
    path: getRouteArticles(),
    element: <ArticlePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: getRouteArticlesDetails(':id'),
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: getRouteArticlesCreate(),
    element: <ArticleCreatePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: getRouteArticlesEdit(':id'),
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: getRouteAdminPanel(),
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.MANAGER, UserRole.ADMIN],
  },

  // last
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};

export { routeConfig };
