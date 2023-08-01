import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Text, Vstack } from '@/shared';
import { CommentCard } from '../comment-card/comment-card';
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

  if (isLoading) {
    return (
      <Vstack gap="16" w100 className={classNames('', {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </Vstack>
    );
  }

  return (
    <Vstack gap="16" w100 className={classNames('', {}, [className])}>
      {comments?.length
        ? comments.map(
          (comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ),
        )
        : <Text text={t('Комментариев еще нет') || ''} />}
    </Vstack>
  );
});

export { CommentList };
