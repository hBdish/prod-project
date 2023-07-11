import { memo } from 'react';
import {
  Avatar, classNames, Skeleton, Text,
} from 'shared';
import styles from './comment-card.module.scss';
import { Comment } from '../../model/types/types';

interface CommentCardProps {
  className?: string
  comment: Comment
  isLoading?: boolean
}

const CommentCard = memo((props: CommentCardProps) => {
  const {
    className,
    comment,
    isLoading,
  } = props;

  if (isLoading) {
    return (
      <div className={classNames(styles.CommentCard, {}, [className])}>
        <div className={styles.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={100} height={16} className={styles.userName} />
        </div>
        <Skeleton width="100%" height={50} className={styles.text} />
      </div>
    );
  }

  return (
    <div className={classNames(styles.CommentCard, {}, [className])}>
      <div className={styles.header}>
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <Text className={styles.userName} title={comment.user.username} />
      </div>
      <Text className={styles.text} text={comment.text} />
    </div>
  );
});

export { CommentCard };
