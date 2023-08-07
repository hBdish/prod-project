import { createSelector } from '@reduxjs/toolkit';
import { getAuthData } from '@/entities';
import {
  AboutIcon,
  ArticlesIcon,
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
  HomeIcon,
  ProfileIcon,
} from '@/shared';
import { SidebarItemType } from '../../model/types/types';

export const getSidebarItems = createSelector(
  getAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: getRouteMain(),
        Icon: HomeIcon,
        text: 'Главная страница кнопка',
      },
      {
        path: getRouteAbout(),
        Icon: AboutIcon,
        text: 'О сайте',
      },
    ];

    if (userData) {
      sidebarItemsList.push(
        {
          path: getRouteProfile(userData.id),
          Icon: ProfileIcon,
          text: 'Профиль',
          authOnly: true,
        },
        {
          path: getRouteArticles(),
          Icon: ArticlesIcon,
          text: 'Стати',
          authOnly: true,
        },
      );
    }

    return sidebarItemsList;
  },
);
