import { memo } from 'react';
import { Card, classNames, Skeleton } from 'shared';
import { ArticleView } from '../../model/const/articleConst';
import styles from './article-list-item.module.scss';

interface ArticleListItemSkeletonProps {
  className?: string
  view: ArticleView
}

const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
  const {
    className,
    view,
  } = props;

  if (view === ArticleView.BIG) {
    return (
      <div
        className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}
      >
        <Card
          className={styles.card}
        >
          <div className={styles.header}>
            <Skeleton width={30} height={30} border="50%" />
            <Skeleton width={150} height={16} className={styles.username} />
            <Skeleton width={150} height={16} className={styles.date} />
          </div>
          <Skeleton width={250} height={24} className={styles.title} />
          <Skeleton width="100%" height={200} className={styles.img} />
          <div className={styles.footer}>
            <Skeleton width={200} height={36} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div
      className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}
    >
      <Card
        className={styles.card}
      >
        <div className={styles.imgWrapper}>
          <Skeleton width={200} height={200} className={styles.img} />
        </div>
        <div className={styles.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={150} height={16} className={styles.title} />
      </Card>
    </div>
  );
});

export { ArticleListItemSkeleton };
