import {
  Button, ButtonTheme, classNames, Icon, NotificationIcon, Popover,
} from 'shared';
import { Notification } from 'entities/notification';
import styles from './notification-button.module.scss';

interface NotificationButtonProps {
  className?: string
}

const NotificationButton = (props: NotificationButtonProps) => {
  const { className } = props;

  return (
    <Popover
      trigger={(
        <Button theme={ButtonTheme.CLEAR}>
          <Icon Svg={NotificationIcon} />
        </Button>
      )}
    >
      <Notification className={classNames(styles.Notification, {}, [className])} />
    </Popover>
  );
};

export { NotificationButton };
