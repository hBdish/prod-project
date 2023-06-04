import styles from './sidebar.module.scss'
import {classNames} from "shared";
import {useState} from "react";
import {useTheme} from "app/providers";
import {ThemeSwitcher} from "widgets/theme-switcher/theme-switcher";
import {LangSwitcher} from "widgets";
import {useTranslation} from "react-i18next";

interface SidebarProps {
  className?: string
}


const Sidebar = ({className}: SidebarProps) => {
  const { theme } = useTheme()
  const {t} = useTranslation()
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed((prevState) => !prevState)
  }

  return (
    <div className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}>
      <button onClick={onToggle}>{t('Меню')}</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} />
      </div>
    </div>
  );
};

export {Sidebar};
