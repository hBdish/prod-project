import { Button, ButtonTheme, classNames } from 'shared';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthData, userActions } from 'entities/user';
import styles from './navbar.module.scss';

interface NavbarProps {
  className?: string
}

const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getAuthData);
  const dispatch = useDispatch();
  const onToggleAuthModal = useCallback(() => {
    setIsAuthModal((prevState) => !prevState);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(styles.navbar, {}, [className])}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={styles.links}
          onClick={onLogout}
        >
          {t('Выйти')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={styles.links}
        onClick={onToggleAuthModal}
      >
        {t('Войти')}
      </Button>
      { isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onToggleAuthModal} />}
    </div>
  );
});

export { Navbar };
