import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, TabItem, Tabs } from '@/shared';

import { ArticleType } from '../../model/const/articleConst';

interface ArticleTypeTabsProps {
  className?: string
  value: ArticleType
  onChangeType: (type: ArticleType) => void
}

const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const {
    className,
    value,
    onChangeType,
  } = props;
  const { t } = useTranslation();

  const typeTabs = useMemo<TabItem[]>(() => [
    {
      value: ArticleType.ALL,
      content: t('Все статьи'),
    },
    {
      value: ArticleType.IT,
      content: t('Айти'),
    },
    {
      value: ArticleType.SCIENCE,
      content: t('Наука'),
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('Экономика'),
    },
  ], [t]);

  const onTabClick = useCallback((tab: TabItem) => {
    onChangeType(tab.value as ArticleType);
  }, [onChangeType]);

  return (
    <Tabs
      tabs={typeTabs}
      value={value}
      onTabClick={onTabClick}
      className={classNames('', {}, [className])}
    />
  );
});

export { ArticleTypeTabs };
