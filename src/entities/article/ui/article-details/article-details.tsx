import {
  Avatar,
  CalendarIcon,
  classNames,
  EyeIcon, Icon,
  ReducersList,
  Skeleton,
  Text,
  TextAlign,
  TextSize,
  useAppDispatch,
  useDynamicModuleLoader,
} from 'shared';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { articleDetailsPageRecommendationReducer } from 'pages';
import { ArticleCodeBlockComponent } from '../article-code-block-component';
import { ArticleTextBlockComponent } from '../article-text-block-component';
import { ArticleImgBlockComponent } from '../article-img-block-component';
import { ArticleBlockType, Block } from '../../types/types';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors';
import { fetchArticleById } from '../../model/services/fetch-article-by-id/fetch-article-by-id';
import { articleDetailsReducer } from '../../model/slice/articleDetaisSlice';
import styles from './article-details.module.scss';

interface ArticleDetailsProps {
  className?: string
  id: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
  articleDetailsRecommendations: articleDetailsPageRecommendationReducer,
};

const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const {
    className,
    id,
  } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation('article');
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);
  let content;

  useDynamicModuleLoader({ reducers, removeAfterUnmount: true });
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  const renderBlock = useCallback((block: Block) => {
    switch (block.type) {
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} className={styles.block} block={block} />;
      case ArticleBlockType.IMG:
        return <ArticleImgBlockComponent key={block.id} className={styles.block} block={block} />;
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} className={styles.block} block={block} />;
      default:
        return null;
    }
  }, []);

  if (isLoading) {
    content = (
      <>
        <Skeleton className={styles.avatar} width={200} height={200} border="50%" />
        <Skeleton className={styles.title} width={300} height={32} />
        <Skeleton className={styles.skeleton} width={600} height={24} />
        <Skeleton className={styles.skeleton} width="100%" height={200} />
        <Skeleton className={styles.skeleton} width="100%" height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        title={t('Произошла ошибка при загрузке статьи') || ''}
      />
    );
  } else {
    content = (
      <>
        <div className={styles.avatarWrapper}>
          <Avatar size={200} src={article?.img} className={styles.avatar} />
        </div>
        <Text
          className={styles.title}
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <div className={styles.articleInfo}>
          <Icon
            Svg={EyeIcon}
            className={styles.icon}
          />
          <Text text={String(article?.views)} />
        </div>
        <div className={styles.articleInfo}>
          <Icon
            Svg={CalendarIcon}
            className={styles.icon}
          />
          <Text text={article?.createdAt} />
        </div>
        {article?.block.map(renderBlock)}
      </>
    );
  }

  return (
    <div className={classNames(styles.ArticleDetails, {}, [className])}>
      {content}
    </div>
  );
});

export { ArticleDetails };
