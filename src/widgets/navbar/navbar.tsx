import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { LoginModal, NotificationButton } from '@/features';
import {
  AppLink,
  AppLinkTheme,
  Button,
  ButtonTheme,
  classNames,
  getRouteArticlesCreate,
  Hstack,
  Text,
  TextTheme,
} from '@/shared';
import { getAuthData } from '@/entities';
import { AvatarDropdown } from '@/features/avatar-dropdown';
import styles from './navbar.module.scss';

interface NavbarProps {
  className?: string
}

const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getAuthData);

  const onToggleAuthModal = useCallback(() => {
    setIsAuthModal((prevState) => !prevState);
  }, []);

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
          to={getRouteArticlesCreate()}
          theme={AppLinkTheme.SECONDARY}
        >
          {t('Создать статью')}
        </AppLink>
        <Hstack align="center" gap="16" className={styles.actions}>
          <NotificationButton />
          <AvatarDropdown />
        </Hstack>
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
