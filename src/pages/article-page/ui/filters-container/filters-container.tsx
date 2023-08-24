import { ArticlesFilters } from '@/widgets';
import { useArticleFilters } from '@/pages/article-page/lib/hooks/use-article-filters';
import { ArticleSortField, ArticleType } from '@/entities';

const FiltersContainer = () => {
  const { search, order, sort, type, onChangeOrder, onChangeSort, onChangeSearch, onChangeType } =
    useArticleFilters();

  return (
    <ArticlesFilters
      sort={sort as ArticleSortField}
      order={order}
      type={type as ArticleType}
      search={search}
      onChangeOrder={onChangeOrder}
      onChangeSort={onChangeSort}
      onChangeType={onChangeType}
      onChangeSearch={onChangeSearch}
    />
  );
};

export { FiltersContainer };
