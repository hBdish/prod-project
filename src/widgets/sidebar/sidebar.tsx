import {
  AppLink, AppLinkTheme,
  Button, ButtonSize, ButtonTheme, AboutIcon, HomeIcon,
  classNames,
} from 'shared';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/theme-switcher/theme-switcher';
import { LangSwitcher } from 'widgets';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config';
import styles from './sidebar.module.scss';

interface SidebarProps {
  className?: string
}

function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div
      data-testid="test-sidebar"
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}
    >
      <Button
        data-testid="test-sidebar-toggle"
        onClick={onToggle}
        className={styles.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.M}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={styles.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={styles.item}
        >
          <HomeIcon className={styles.icon} />
          <span className={styles.link}>
            {t('Главная страница кнопка')}
          </span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
          className={styles.item}
        >
          <AboutIcon className={styles.icon} />
          <span className={styles.link}>{t('О сайте')}</span>
        </AppLink>
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher
          className={styles.lang}
          short={collapsed}
        />
      </div>
    </div>
  );
}

export { Sidebar };
