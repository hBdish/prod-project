import React, { FC, HTMLAttributeAnchorTarget, memo } from 'react';
import { Virtuoso, VirtuosoGrid } from 'react-virtuoso';
import { useTranslation } from 'react-i18next';
import { classNames, Text } from '@/shared';
import { ArticlePageFilters } from '@/pages/article-page/ui/article-page-filters';
import { ArticleView } from '../../model/const/articleConst';
import { ArticleListItem } from '../article-list-item/article-list-item';
import { Article } from '../../types/types';
import { ArticleListItemSkeleton } from '../article-list-item/article-list-item-skeleton';
import styles from './article-list.module.scss';

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view: ArticleView
  target?: HTMLAttributeAnchorTarget
  onLoadNextPart?: () => void
}

const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
    target,
    onLoadNextPart,
  } = props;

  const { t } = useTranslation('article');

  const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.BIG ? 3 : 8)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={styles.card} key={index} view={view} />
    ));

  const Header = memo(() => <ArticlePageFilters />);

  const ItemContainerComp: FC = memo(() => (
    <div className={styles.itemsContainer}>
      {getSkeletons(view)}
    </div>
  ));

  const Footer = memo(() => {
    if (isLoading) {
      return (
        <div className={classNames('', {}, [className, styles[view]])}>
          {getSkeletons(view)}
        </div>
      );
    }
    return null;
  });

  const renderArticle = (index: number, article: Article) => (
    <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
      <ArticleListItem
        className={styles.card}
        article={article}
        view={view}
        key={article.id}
        target={target}
      />
    </div>
  );

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
        <Text title={t('Статьи не найдены') ?? ''} />
      </div>
    );
  }

  if (view === ArticleView.BIG) {
    return (
      <Virtuoso
        data-testid="ArticleList"
        style={{ height: '100%' }}
        data={articles}
        totalCount={articles.length}
        itemContent={renderArticle}
        endReached={onLoadNextPart}
        // initialTopMostItemIndex={selectedArticle}
        components={{
          Header,
          Footer,
        }}
      />
    );
  }

  return (
    <VirtuosoGrid
      style={{ height: '100%' }}
      data={articles}
      totalCount={articles.length}
      listClassName={styles.itemsWrapper}
      itemContent={renderArticle}
      endReached={onLoadNextPart}
      scrollSeekConfiguration={{
        enter: (velocity) => Math.abs(velocity) > 200,
        exit: (velocity) => Math.abs(velocity) < 30,
      }}
      components={{
        Header,
        Footer,
        ScrollSeekPlaceholder: ItemContainerComp,
      }}
    />
  );
});

export { ArticleList };
