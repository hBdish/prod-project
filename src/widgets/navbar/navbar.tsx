import { Button, ButtonTheme, classNames } from 'shared';
import { useTranslation } from 'react-i18next';
import { Modal } from 'widgets';
import { useCallback, useState } from 'react';
import styles from './navbar.module.scss';

interface NavbarProps {
  className?: string
}

function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleAuthModal = useCallback(() => {
    setIsAuthModal((prevState) => !prevState);
  }, []);

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={styles.links}
        onClick={onToggleAuthModal}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleAuthModal} />
    </div>
  );
}

export { Navbar };
