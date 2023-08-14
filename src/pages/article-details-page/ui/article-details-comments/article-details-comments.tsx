import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames, Text, TextSize, useAppDispatch, Vstack } from '@/shared';
import { AddCommentForm } from '@/features';
import { addCommentsForArticle, getArticleCommentsIsLoading, getArticleSelectors } from '@/pages';

interface ArticleDetailsCommentsProps {
  className?: string;
}

const ArticleDetailsComments = (props: ArticleDetailsCommentsProps) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleSelectors.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentsForArticle(text));
    },
    [dispatch],
  );

  if (isLoading) {
    return null;
  }

  return (
    <div className={classNames('', {}, [className])}>
      <Text
        size={TextSize.L}
        // className={styles.commentTitle}
        title={t('Комментарии') || ''}
      />
      <AddCommentForm onSendComment={onSendComment} />

      <Vstack
        gap="16"
        w100
        className={classNames('', {}, [className])}
      >
        {comments?.length ? (
          comments.map((comment) => <div key={comment.id}>{comment.text}</div>)
        ) : (
          <Text text={t('Комментариев еще нет') || ''} />
        )}
      </Vstack>
    </div>
  );
};

export { ArticleDetailsComments };
