import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
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
import styles from './navbar-deprecated.module.scss';
import { LoginModal, NotificationButton } from '@/features';
import { AvatarDropdown } from '@/features/avatar-dropdown';

interface NavbarDeprecatedProps {
  className?: string;
  isAuth: boolean;
}

const NavbarDeprecated = (props: NavbarDeprecatedProps) => {
  const { className, isAuth } = props;
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleAuthModal = useCallback(() => {
    setIsAuthModal((prevState) => !prevState);
  }, []);

  if (isAuth) {
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
        <Hstack
          align="center"
          gap="16"
          className={styles.actions}
        >
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
      {isAuthModal && (
        <LoginModal
          isOpen={isAuthModal}
          onClose={onToggleAuthModal}
        />
      )}
    </header>
  );
};

export { NavbarDeprecated };