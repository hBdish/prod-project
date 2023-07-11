import { createSelector } from '@reduxjs/toolkit';
import { getAuthData } from 'entities/user';
import { RoutePath } from 'shared/config';
import {
  AboutIcon, ArticlesIcon, HomeIcon, ProfileIcon,
} from 'shared';
import { SidebarItemType } from 'widgets/sidebar';

export const getSidebarItems = createSelector(
  getAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        Icon: HomeIcon,
        text: 'Главная страница кнопка',
      },
      {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'О сайте',
      },
    ];

    if (userData) {
      sidebarItemsList.push(
        {
          path: RoutePath.profile + userData.id,
          Icon: ProfileIcon,
          text: 'Профиль',
          authOnly: true,
        },
        {
          path: RoutePath.articles,
          Icon: ArticlesIcon,
          text: 'Стати',
          authOnly: true,
        },
      );
    }

    return sidebarItemsList;
  },
);
