import styles from './navbar.module.scss'
import {classNames} from "shared";
import {AppLink, AppLinkTheme} from "shared/ui/app-link/app-link";
import {useTranslation} from "react-i18next";

interface NavbarProps {
  className?: string
}

const Navbar = ({className}: NavbarProps) => {
  const {t} = useTranslation();

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
      <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={styles.mainLink}>{t('Главная страниц')}</AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>{t('О сайте')}</AppLink>
      </div>
    </div>
  );
};

export {Navbar};

