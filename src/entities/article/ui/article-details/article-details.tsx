import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  Avatar,
  CalendarIcon,
  classNames,
  EyeIcon,
  Hstack,
  Icon,
  ReducersList,
  Skeleton,
  Text,
  TextAlign,
  TextSize,
  useAppDispatch,
  useDynamicModuleLoader,
  Vstack,
} from '@/shared';
import { articleDetailsPageRecommendationReducer } from '@/pages';
import { ArticleBlockType } from '../../model/const/articleConst';
import { ArticleCodeBlockComponent } from '../article-code-block-component';
import { ArticleTextBlockComponent } from '../article-text-block-component';
import { ArticleImgBlockComponent } from '../article-img-block-component';
import { Block } from '../../types/types';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors';
import { fetchArticleById } from '../../model/services/fetch-article-by-id/fetch-article-by-id';
import { articleDetailsReducer } from '../../model/slice/articleDetaisSlice';

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
        return <ArticleTextBlockComponent key={block.id} block={block} />;
      case ArticleBlockType.IMG:
        return <ArticleImgBlockComponent key={block.id} block={block} />;
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} block={block} />;
      default:
        return null;
    }
  }, []);

  if (isLoading) {
    content = (
      <>
        <Skeleton width={200} height={200} border="50%" />
        <Skeleton width={300} height={32} />
        <Skeleton width={600} height={24} />
        <Skeleton width="100%" height={200} />
        <Skeleton width="100%" height={200} />
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
        <Hstack
          justify="center"
          w100
        >
          <Avatar
            size={200}
            src={article?.img}
          />
        </Hstack>
        <Vstack gap="8" w100>
          <Hstack gap="8">
            <Icon
              Svg={EyeIcon}
            />
            <Text text={String(article?.views)} />
          </Hstack>
          <Hstack gap="8">
            <Icon
              Svg={CalendarIcon}
            />
            <Text text={article?.createdAt} />
          </Hstack>
        </Vstack>
        <Text
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        {article?.block.map(renderBlock)}
      </>
    );
  }

  return (
    <Vstack w100 gap="16" className={classNames('', {}, [className])}>
      {content}
    </Vstack>
  );
});

export { ArticleDetails };
