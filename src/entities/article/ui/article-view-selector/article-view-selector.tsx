import { memo } from 'react';
import {
  Button, ButtonTheme, classNames, Icon, ListIcon, TiledIcon,
} from 'shared';
import { ArticleView } from '../../types/types';
import styles from './article-view-selector.module.scss';

interface ArticleViewSelectorProps {
  className?: string
  view: ArticleView
  onViewClick: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: TiledIcon,
  },
  {
    view: ArticleView.BIG,
    icon: ListIcon,
  },
];

const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const {
    className,
    view,
    onViewClick,
  } = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(styles.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((viewType, index) => (
        <Button
          key={index}
          theme={ButtonTheme.CLEAR}
          onClick={onClick(viewType.view)}
        >
          <Icon
            className={classNames('', { [styles.selected]: viewType.view === view }, [])}
            Svg={viewType.icon}
          />
        </Button>
      ))}
    </div>
  );
});

export { ArticleViewSelector };
