import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppLogo, ArrowIcon, classNames, Hstack, Vstack } from '@/shared';
import styles from './sidebar-redesigned.module.scss';
import { getSidebarItems } from '../../../model/selectors/get-sidebar-items';
import { SidebarItem } from '../../sidebar-item/sidebar-item';
import { IconRedesigned } from '@/shared/ui/redesigned/icon';
import { LangSwitcher, ThemeSwitcher } from '@/features';

interface SidebarRedesignedProps {
  className?: string;
}

const SidebarRedesigned = (props: SidebarRedesignedProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);
  const onToggle = () => {
    setCollapsed((prevState) => !prevState);
  };

  const itemsList = useMemo(
    () =>
      sidebarItemsList.map((item) => (
        <SidebarItem
          key={item.path}
          item={item}
          collapsed={collapsed}
        />
      )),
    [collapsed, sidebarItemsList],
  );
  console.log(collapsed);

  return (
    <aside
      data-testid="test-sidebar"
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
    >
      <AppLogo
        size={collapsed ? 30 : 50}
        className={styles.appLogo}
      />
      <Vstack
        role="navigation"
        gap="8"
        className={styles.items}
      >
        {itemsList}
      </Vstack>
      <IconRedesigned
        data-testid="test-sidebar-toggle"
        onClick={onToggle}
        className={styles.collapseBtn}
        Svg={ArrowIcon}
        clickable
      />
      <Hstack
        gap="8"
        align="center"
        className={styles.switchers}
      >
        <ThemeSwitcher />
        <LangSwitcher
          className={styles.lang}
          short={collapsed}
        />
      </Hstack>
    </aside>
  );
};

export { SidebarRedesigned };
