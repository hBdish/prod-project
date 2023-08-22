import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import {
  Avatar,
  AvatarRedesigned,
  classNames,
  Dropdown,
  getRouteAdminPanel,
  getRouteProfile,
  ToggleFeatures,
} from '@/shared';
import { authDataSelector, isUserAdmin, isUserManager, userActions } from '@/entities';
import { DropdownRedesigned } from '@/shared/ui/redesigned/popups/ui/dropdown';

interface AvatarDropdownProps {
  className?: string;
}

const AvatarDropdown = (props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const authData = useSelector(authDataSelector);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) {
    return null;
  }

  const items = [
    ...(isAdminPanelAvailable
      ? [
          {
            content: t('Админ панель'),
            href: getRouteAdminPanel(),
          },
        ]
      : []),
    {
      content: t('Профиль пользователя'),
      href: getRouteProfile(authData.id),
    },
    {
      content: t('Выйти'),
      onClick: onLogout,
    },
  ];

  return (
    <ToggleFeatures
      name="isAppRedesigned"
      on={
        <DropdownRedesigned
          className={classNames('', {}, [className])}
          direction="bottomLeft"
          items={items}
          trigger={
            <AvatarRedesigned
              size={48}
              src={authData.avatar}
            />
          }
        />
      }
      off={
        <Dropdown
          className={classNames('', {}, [className])}
          direction="bottomLeft"
          items={items}
          trigger={
            <Avatar
              size={30}
              src={authData.avatar}
            />
          }
        />
      }
    />
  );
};

export { AvatarDropdown };
