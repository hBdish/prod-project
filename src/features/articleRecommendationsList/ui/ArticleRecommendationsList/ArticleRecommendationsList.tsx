import {
  classNames, Hstack, Text, TextSize, Vstack,
} from 'shared';
import { useTranslation } from 'react-i18next';
import { Article, ArticleListItem, ArticleView } from 'entities/article';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = (props: ArticleRecommendationsListProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { data: articles, isLoading } = useArticleRecommendationsList(3);

  if (isLoading) {
    return null;
  }

  return (
    <Vstack w100 gap="8" className={classNames('', {}, [className])}>
      <Text
        size={TextSize.L}
        title={t('Рекомендуем') || ''}
      />
      <Hstack w100 justify="center" gap="24">
        {articles.map((article: Article) => (
          <ArticleListItem
            target="_blank"
            article={article}
            view={ArticleView.SMALL}
          />
        ))}
      </Hstack>
    </Vstack>
  );
};
