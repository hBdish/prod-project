import { Button, classNames } from 'shared';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/theme-switcher/theme-switcher';
import { LangSwitcher } from 'widgets';
import { useTranslation } from 'react-i18next';
import styles from './sidebar.module.scss';

interface SidebarProps {
  className?: string
}

function Sidebar({ className }: SidebarProps) {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}>
      <Button onClick={onToggle}>{t('Меню')}</Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} />
      </div>
    </div>
  );
}

export { Sidebar };
