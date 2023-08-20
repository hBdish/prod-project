import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, ButtonSize, ButtonTheme, classNames, Vstack } from '@/shared';
import styles from './sidebar-deprecated.module.scss';
import { LangSwitcher, ThemeSwitcher } from '@/features';
import { getSidebarItems } from '../../../model/selectors/get-sidebar-items';
import { SidebarItem } from '../../sidebar-item/sidebar-item';

interface SidebarDeprecatedProps {
  className?: string;
}

const SidebarDeprecated = (props: SidebarDeprecatedProps) => {
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
      <Vstack
        role="navigation"
        gap="8"
        align="start"
        className={styles.links}
      >
        {itemsList}
      </Vstack>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher
          className={styles.lang}
          short={collapsed}
        />
      </div>
    </aside>
  );
};

export { SidebarDeprecated };
