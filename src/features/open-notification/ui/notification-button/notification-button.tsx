import React, { useCallback, useState } from 'react';
import { isMobile } from 'react-device-detect';
import {
  Button,
  ButtonTheme,
  classNames,
  Drawer,
  Icon,
  IconRedesigned,
  NotificationIcon,
  NotificationIconDeprecated,
  Popover,
  PopoverRedesigned,
  ToggleFeatures,
} from '@/shared';
import { Notification } from '@/entities';
import styles from './notification-button.module.scss';
import { DrawerRedesigned } from '@/shared/ui/redesigned/drawer';

interface NotificationButtonProps {
  className?: string;
}

const NotificationButton = (props: NotificationButtonProps) => {
  const { className } = props;
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const onOpenDrawer = useCallback(() => {
    setIsOpenDrawer((prevState) => !prevState);
  }, []);

  const trigger = (
    <ToggleFeatures
      name="isAppRedesigned"
      on={
        <IconRedesigned
          clickable
          onClick={onOpenDrawer}
          width={40}
          height={40}
          Svg={NotificationIcon}
        />
      }
      off={
        <Button
          onClick={onOpenDrawer}
          theme={ButtonTheme.CLEAR}
        >
          <Icon Svg={NotificationIconDeprecated} />
        </Button>
      }
    />
  );

  if (!isMobile) {
    return (
      <ToggleFeatures
        name="isAppRedesigned"
        on={
          <div>
            <PopoverRedesigned trigger={trigger}>
              <Notification className={classNames(styles.Notification, {}, [className])} />
            </PopoverRedesigned>
          </div>
        }
        off={
          <div>
            <Popover trigger={trigger}>
              <Notification className={classNames(styles.Notification, {}, [className])} />
            </Popover>
          </div>
        }
      />
    );
  }

  return (
    <ToggleFeatures
      name="isAppRedesigned"
      on={
        <>
          {trigger}
          <DrawerRedesigned
            isOpen={isOpenDrawer}
            onClose={onOpenDrawer}
          >
            <Notification />
          </DrawerRedesigned>
        </>
      }
      off={
        <>
          {trigger}
          <Drawer
            isOpen={isOpenDrawer}
            onClose={onOpenDrawer}
          >
            <Notification />
          </Drawer>
        </>
      }
    />
  );
};

export { NotificationButton };
