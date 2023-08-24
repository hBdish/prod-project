import { memo } from 'react';
import {
  Button,
  ButtonTheme,
  CardRedesigned,
  classNames,
  Hstack,
  Icon,
  IconRedesigned,
  ListIcon,
  ListIconDeprecated,
  TiledIcon,
  TiledIconDeprecated,
  ToggleFeatures,
  toggleFeatures,
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
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => TiledIcon,
      off: () => TiledIconDeprecated,
    }),
  },
  {
    view: ArticleView.BIG,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => ListIcon,
      off: () => ListIconDeprecated,
    }),
  },
];

const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <ToggleFeatures
      name="isAppRedesigned"
      on={
        <CardRedesigned
          border="round"
          className={classNames(styles.ArticleViewSelectorRedesigned, {}, [className])}
        >
          <Hstack gap="8">
            {viewTypes.map((viewType) => (
              <IconRedesigned
                className={classNames('', { [styles.selectedRedesigned]: viewType.view === view }, [])}
                Svg={viewType.icon}
                clickable
                onClick={onClick(viewType.view)}
              />
            ))}
          </Hstack>
        </CardRedesigned>
      }
      off={
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
      }
    />
  );
});

export { ArticleViewSelector };
