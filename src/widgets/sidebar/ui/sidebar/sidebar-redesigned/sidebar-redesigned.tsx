import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppLogo, classNames } from '@/shared';
import styles from './sidebar-redesigned.module.scss';
import { getSidebarItems } from '../../../model/selectors/get-sidebar-items';
import { SidebarItem } from '../../sidebar-item/sidebar-item';

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

  return (
    <aside
      data-testid="test-sidebar"
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
    >
      <AppLogo className={styles.appLogo} />
      123
    </aside>
  );
};

export { SidebarRedesigned };
