import {
  classNames, ReducersList, Text, useAppDispatch, useDynamicModuleLoader, useInitialEffect,
} from 'shared';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/article';
import { useParams } from 'react-router-dom';
import { CommentList } from 'entities/comment';
import {
  articleDetailsCommentReducer, fetchCommentsById, getArticleCommentsIsLoading, getArticleSelectors,
} from 'pages';
import { useSelector } from 'react-redux';
import styles from './article-details-page.module.scss';

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const { id } = useParams<{id: string}>();
  const comments = useSelector(getArticleSelectors.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);
  const dispatch = useAppDispatch();

  useDynamicModuleLoader({ reducers, removeAfterUnmount: true });
  useInitialEffect(() => {
    dispatch(fetchCommentsById(id));
  });

  if (!id) {
    return (
      <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </div>
    );
  }

  return (
    <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
      <Text className={styles.commentTitle} title={t('Комментарии') || ''} />
      <CommentList
        isLoading={isLoading}
        comments={comments}
      />
    </div>
  );
};

export { ArticleDetailsPage };
