import { useTranslation } from 'react-i18next';
import { ArticleListItem, ArticleView } from 'entities/article';
import {
  classNames, Hstack, Text, TextSize, Vstack,
} from 'shared';
import React from 'react';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = (props: ArticleRecommendationsListProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { data: article, isLoading } = useArticleRecommendationsList(3);

  if (isLoading || !article) {
    return null;
  }

  return (
    <Vstack w100 gap="8" className={classNames('', {}, [className])}>
      <Text
        size={TextSize.L}
        title={t('Рекомендуем') || ''}
      />
      <Hstack w100 justify="center" gap="24">
        {article.map((article) => (
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
