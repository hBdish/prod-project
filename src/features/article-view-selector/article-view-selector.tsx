import { memo } from 'react';
import {
  Button,
  ButtonTheme,
  classNames,
  Icon,
  ListIconDeprecated,
  TiledIconDeprecated,
} from '@/shared';
import { ArticleView } from '../../entities/article/model/const/articleConst';
import styles from './article-view-selector.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: TiledIconDeprecated,
  },
  {
    view: ArticleView.BIG,
    icon: ListIconDeprecated,
  },
];

const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;

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
            width={24}
            height={24}
          />
        </Button>
      ))}
    </div>
  );
});

export { ArticleViewSelector };
