import { useTranslation } from 'react-i18next';
import React from 'react';
import { ArticleListItem } from '@/entities';
import {
  classNames, Hstack, Text, TextSize, Vstack,
} from '@/shared';
import { ArticleView } from '@/entities/article';
import { useArticleRecommendationsList } from '../../api/article-recommendations-api';

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
            key={article.id}
            target="_blank"
            article={article}
            view={ArticleView.SMALL}
          />
        ))}
      </Hstack>
    </Vstack>

  );
};
