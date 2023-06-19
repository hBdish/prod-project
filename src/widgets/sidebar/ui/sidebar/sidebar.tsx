import {
  Button, ButtonSize, ButtonTheme, classNames,
} from 'shared';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/theme-switcher/theme-switcher';
import { LangSwitcher } from 'widgets';
import { SidebarItem } from '../sidebar-item/sidebar-item';
import styles from './sidebar.module.scss';
import { SidebarItemsList } from '../../model/items';

interface SidebarProps {
  className?: string
}

const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prevState) => !prevState);
  };

  const itemsList = useMemo(
    () => SidebarItemsList.map((item) => <SidebarItem key={item.path} item={item} collapsed={collapsed} />),
    [collapsed],
  );

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
        {itemsList}
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
});

export { Sidebar };
