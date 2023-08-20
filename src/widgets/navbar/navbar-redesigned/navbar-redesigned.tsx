import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme, classNames, Hstack } from '@/shared';
import styles from './navbar-redesigned.module.scss';
import { LoginModal, NotificationButton } from '@/features';
import { AvatarDropdown } from '@/features/avatar-dropdown';

interface NavbarRedesignedProps {
  className?: string;
  isAuth: boolean;
}

const NavbarRedesigned = (props: NavbarRedesignedProps) => {
  const { className, isAuth } = props;
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleAuthModal = useCallback(() => {
    setIsAuthModal((prevState) => !prevState);
  }, []);

  if (isAuth) {
    return (
      <header className={classNames(styles.navbar, {}, [className])}>
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

export { NavbarRedesigned };
