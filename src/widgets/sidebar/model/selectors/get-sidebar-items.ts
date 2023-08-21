import { createSelector } from '@reduxjs/toolkit';
import { authDataSelector } from '@/entities';
import {
  AboutIconDeprecated,
  ArticleIcon,
  ArticlesIconDeprecated,
  AvatarIcon,
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
  HomeIcon,
  HomeIconDeprecated,
  InfoIcon,
  ProfileIconDeprecated,
  toggleFeatures,
} from '@/shared';
import { SidebarItemType } from '../../model/types/types';

export const getSidebarItems = createSelector(authDataSelector, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        on: () => HomeIcon,
        off: () => HomeIconDeprecated,
      }),
      text: 'Главная страница кнопка',
    },
    {
      path: getRouteAbout(),
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        on: () => InfoIcon,
        off: () => AboutIconDeprecated,
      }),
      text: 'О сайте',
    },
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: getRouteProfile(userData.id),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          on: () => AvatarIcon,
          off: () => ProfileIconDeprecated,
        }),
        text: 'Профиль',
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          on: () => ArticleIcon,
          off: () => ArticlesIconDeprecated,
        }),
        text: 'Стати',
        authOnly: true,
      },
    );
  }

  return sidebarItemsList;
});
