import { useTranslation } from 'react-i18next';
import {
  CardRedesigned,
  classNames,
  IconRedesigned,
  InputRedesigned,
  SearchIcon,
  SortOrder,
  Vstack,
} from '@/shared';
import styles from './articles-filters.module.scss';
import { ArticleSortField, ArticleType } from '@/entities';
import { ArticleTypeTabs, SortSelector } from '@/features';

interface ArticlesFiltersProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  type: ArticleType;
  search: string;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeType: (type: ArticleType) => void;
  onChangeSearch?: (value: string) => void;
}

const ArticlesFilters = (props: ArticlesFiltersProps) => {
  const {
    className,
    sort,
    order,
    search,
    type,
    onChangeOrder,
    onChangeSort,
    onChangeType,
    onChangeSearch,
  } = props;

  const { t } = useTranslation();

  return (
    <CardRedesigned className={classNames(styles.ArticlesFilters, {}, [className])}>
      <Vstack gap="32">
        <InputRedesigned
          onChange={onChangeSearch}
          value={search}
          placeholder={t('Поиск') || ''}
          addonLeft={<IconRedesigned Svg={SearchIcon} />}
        />
        <SortSelector
          sort={sort as ArticleSortField}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleTypeTabs
          className={styles.typeTabs}
          value={type as ArticleType}
          onChangeType={onChangeType}
        />
      </Vstack>
    </CardRedesigned>
  );
};

export { ArticlesFilters };
