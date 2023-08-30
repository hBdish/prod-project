import { HTMLAttributeAnchorTarget, memo } from 'react';
import { ArticleView } from '../../model/const/articleConst';
import { Article } from '../../types/types';
import { ToggleFeatures } from '@/shared';
import { ArticleListItemDeprecated } from './article-list-item-deprecated/article-list-item-deprecated';
import { ArticleListItemRedesigned } from './article-list-item-redesigned/article-list-item-redesigned';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const ArticleListItem = memo((props: ArticleListItemProps) => (
  <ToggleFeatures
    name="isAppRedesigned"
    on={<ArticleListItemRedesigned {...props} />}
    off={<ArticleListItemDeprecated {...props} />}
  />
));

export { ArticleListItem };
