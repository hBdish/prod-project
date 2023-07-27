import { memo, useMemo } from 'react';
import {
  classNames, Select, SelectOptions, SortOrder,
} from 'shared';
import { useTranslation } from 'react-i18next';
import { ArticleSortField } from 'entities/article/model/const';
import styles from './sort-selector.module.scss';

interface SortSelectorProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSort: ArticleSortField) => void
}

const SortSelector = memo((props: SortSelectorProps) => {
  const {
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSort,
  } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOptions<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('возрастанию'),
    },
    {
      value: 'desc',
      content: t('убыванию'),
    },
  ], [t]);

  const sortFieldOptions = useMemo<SelectOptions<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('дате создания'),
    },
    {
      value: ArticleSortField.TITLE,
      content: t('названию'),
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('просмотрам'),
    },
  ], [t]);

  return (
    <div className={classNames(styles.SortSelector, {}, [className])}>
      <Select<ArticleSortField>
        options={sortFieldOptions}
        label={t('Сортировать по') || ''}
        value={sort}
        onChange={onChangeSort}
      />
      <Select<SortOrder>
        className={styles.order}
        options={orderOptions}
        label={t('по') || ''}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  );
});

export { SortSelector };
