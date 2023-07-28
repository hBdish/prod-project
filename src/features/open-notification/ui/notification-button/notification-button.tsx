import {
  Button, ButtonTheme, classNames, Drawer, Icon, NotificationIcon, Popover,
} from 'shared';
import { Notification } from 'entities/notification';
import { useCallback, useState } from 'react';
import { isMobile } from 'react-device-detect';
import styles from './notification-button.module.scss';

interface NotificationButtonProps {
  className?: string
}

const NotificationButton = (props: NotificationButtonProps) => {
  const { className } = props;
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const onOpenDrawer = useCallback(() => {
    setIsOpenDrawer((prevState) => !prevState);
  }, []);

  const trigger = (
    <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
      <Icon Svg={NotificationIcon} />
    </Button>
  );

  if (!isMobile) {
    return (
      <div>
        <Popover
          trigger={trigger}
        >
          <Notification className={classNames(styles.Notification, {}, [className])} />
        </Popover>
      </div>

    );
  }

  return (
    <>
      {trigger}
      <Drawer isOpen={isOpenDrawer} onClose={onOpenDrawer}>
        <Notification />
      </Drawer>
    </>
  );
};

export { NotificationButton };
