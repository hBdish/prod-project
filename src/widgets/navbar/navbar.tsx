import { classNames } from 'shared';
import { AppLink, AppLinkTheme } from 'shared/ui/app-link/app-link';
import { useTranslation } from 'react-i18next';
import styles from './navbar.module.scss';

interface NavbarProps {
  className?: string
}

function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div />
    </div>
  );
}

export { Navbar };
