import {
  Card, CardTheme, classNames, Text,
} from 'shared';
import { Notifications } from '../../model/types/notifications';
import styles from './notification-item.module.scss';

interface NotificationItemProps {
  className?: string
  item: Notifications
}

const NotificationItem = (props: NotificationItemProps) => {
  const {
    className,
    item,
  } = props;

  const content = (
    <Card
      theme={CardTheme.OUTLINE}
      className={classNames(styles.NotificationItem, {}, [className])}
    >
      <Text title={item.title} text={item.description} />
    </Card>
  );

  if (item.href) {
    return (
      <a className={styles.link} target="_blank" href={item.href} rel="noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

export { NotificationItem };
