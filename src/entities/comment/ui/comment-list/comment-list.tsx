import { memo } from 'react';
import { classNames, Text } from 'shared';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../comment-card/comment-card';
import styles from './comment-list.module.scss';
import { Comment } from '../../model/types/types';

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

const CommentList = memo((props: CommentListProps) => {
  const {
    className,
    comments,
    isLoading,
  } = props;

  const { t } = useTranslation('comment');

  return (
    <div className={classNames('', {}, [className])}>
      {comments?.length
        ? comments.map(
          (comment) => (
            <CommentCard key={comment.id} className={styles.comment} comment={comment} />
          ),
        )
        : <Text text={t('Комментариев еще нет') || ''} />}
    </div>
  );
});

export { CommentList };
