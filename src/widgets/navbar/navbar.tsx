import {
  AppLink, AppLinkTheme, Avatar, Button, ButtonTheme, classNames, Dropdown, Text, TextTheme,
} from 'shared';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/user';
import { RoutePath } from 'shared/config';
import styles from './navbar.module.scss';

interface NavbarProps {
  className?: string
}

const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getAuthData);
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const onToggleAuthModal = useCallback(() => {
    setIsAuthModal((prevState) => !prevState);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (authData) {
    return (
      <header className={classNames(styles.navbar, {}, [className])}>
        <Text
          className={styles.appName}
          title={t('PET PROJECT')}
          theme={TextTheme.PRIMARY}
        />
        <AppLink
          className={styles.createBtn}
          to={RoutePath.articles_create}
          theme={AppLinkTheme.SECONDARY}
        >
          {t('Создать статью')}
        </AppLink>
        <Dropdown
          direction="bottomLeft"
          className={styles.dropdown}
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
      </header>
    );
  }

  return (
    <header className={classNames(styles.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={styles.links}
        onClick={onToggleAuthModal}
      >
        {t('Войти')}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onToggleAuthModal} />}
    </header>
  );
});

export { Navbar };
