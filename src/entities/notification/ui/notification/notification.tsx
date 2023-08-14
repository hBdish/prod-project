import { classNames, Skeleton, Vstack } from '@/shared';
import { useNotificationsList } from '../../api/notification-api';
import { NotificationItem } from '../notification-item/notification-item';

interface NotificationProps {
  className?: string;
}

const Notification = (props: NotificationProps) => {
  const { className } = props;
  const { data, isLoading } = useNotificationsList(null, {
    pollingInterval: 5000,
  });

  if (isLoading) {
    return (
      <Skeleton
        width={500}
        height={300}
      />
    );
  }

  return (
    <Vstack
      gap="16"
      w100
      className={classNames('', {}, [className])}
    >
      {data?.map((item) => (
        <NotificationItem
          key={item.id}
          item={item}
        />
      ))}
    </Vstack>
  );
};

export { Notification };
