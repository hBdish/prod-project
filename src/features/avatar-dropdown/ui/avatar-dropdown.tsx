import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import {
  Avatar, classNames, Dropdown, RoutePath,
} from '@/shared';
import {
  getAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities';

// import styles from './avatar-dropdown.module.scss';

interface AvatarDropdownProps {
  className?: string
}

const AvatarDropdown = (props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const authData = useSelector(getAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      className={classNames('', {}, [className])}
      direction="bottomLeft"
      items={[
        ...(isAdminPanelAvailable ? [{
          content: t('Админ панель'),
          href: RoutePath.admin_panel,
        }] : []),
        {
          content: t('Профиль пользователя'),
          href: RoutePath.profile + authData.id,
        },
        {
          content: t('Выйти'),
          onClick: onLogout,
        },
      ]}
      trigger={<Avatar size={30} src={authData.avatar} />}
    />
  );
};

export { AvatarDropdown };
