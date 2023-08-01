import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AppLink, AppLinkTheme, classNames } from '@/shared';

import { SidebarItemType } from '../../model/types/types';
import styles from './sidebar-item.module.scss';
import { getAuthData } from '@/entities';

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(styles.item, { [styles.collapsed]: collapsed }, [])}
    >
      <item.Icon className={styles.icon} />
      <span className={styles.link}>
        {t(item.text)}
      </span>
    </AppLink>
  );
};

export { SidebarItem };
