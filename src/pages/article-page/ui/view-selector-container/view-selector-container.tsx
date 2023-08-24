import { classNames } from '@/shared';
import { ArticleView } from '@/entities';
import { ArticleViewSelector } from '@/features';
import { useArticleFilters } from '../../lib/hooks/use-article-filters';

interface ViewSelectorContainerProps {
  className?: string;
}

const ViewSelectorContainer = (props: ViewSelectorContainerProps) => {
  const { className } = props;
  const { view, onChangeView } = useArticleFilters();

  return (
    <ArticleViewSelector
      className={classNames('', {}, [className])}
      view={view as ArticleView}
      onViewClick={onChangeView}
    />
  );
};

export { ViewSelectorContainer };
