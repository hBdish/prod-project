import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AppLink, AppLinkRedesigned, AppLinkTheme, classNames, ToggleFeatures } from '@/shared';

import { SidebarItemType } from '../../model/types/types';
import styles from './sidebar-item.module.scss';
import { authDataSelector } from '@/entities';
import { IconRedesigned } from '@/shared/ui/redesigned/icon';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(authDataSelector);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <ToggleFeatures
      name="isAppRedesigned"
      on={
        <AppLinkRedesigned
          variant="primary"
          to={item.path}
          activeClassName={styles.active}
          className={classNames(styles.item, { [styles.collapsedRedesigned]: collapsed }, [])}
        >
          <IconRedesigned Svg={item.Icon} />
          <span className={styles.link}>{t(item.text)}</span>
        </AppLinkRedesigned>
      }
      off={
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={item.path}
          className={classNames(styles.item, { [styles.collapsed]: collapsed }, [])}
        >
          <item.Icon className={styles.icon} />
          <span className={styles.link}>{t(item.text)}</span>
        </AppLink>
      }
    />
  );
};

export { SidebarItem };
