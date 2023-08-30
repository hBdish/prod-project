import { memo } from 'react';
import {
  Card,
  CardRedesigned,
  classNames,
  Skeleton,
  SkeletonRedesigned,
  ToggleFeatures,
} from '@/shared';
import { ArticleView } from '../../model/const/articleConst';
import styles from './article-list-item-deprecated/article-list-item-deprecated.module.scss';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
  const { className, view } = props;

  if (view === ArticleView.BIG) {
    return (
      <div className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
        <ToggleFeatures
          name="isAppRedesigned"
          on={
            <CardRedesigned className={styles.card}>
              <div className={styles.header}>
                <SkeletonRedesigned
                  width={30}
                  height={30}
                  border="50%"
                />
                <SkeletonRedesigned
                  width={150}
                  height={16}
                  className={styles.username}
                />
                <SkeletonRedesigned
                  width={150}
                  height={16}
                  className={styles.date}
                />
              </div>
              <SkeletonRedesigned
                width={250}
                height={24}
                className={styles.title}
              />
              <SkeletonRedesigned
                width="100%"
                height={200}
                className={styles.img}
              />
              <div className={styles.footer}>
                <SkeletonRedesigned
                  width={200}
                  height={36}
                />
              </div>
            </CardRedesigned>
          }
          off={
            <Card className={styles.card}>
              <div className={styles.header}>
                <Skeleton
                  width={30}
                  height={30}
                  border="50%"
                />
                <Skeleton
                  width={150}
                  height={16}
                  className={styles.username}
                />
                <Skeleton
                  width={150}
                  height={16}
                  className={styles.date}
                />
              </div>
              <Skeleton
                width={250}
                height={24}
                className={styles.title}
              />
              <Skeleton
                width="100%"
                height={200}
                className={styles.img}
              />
              <div className={styles.footer}>
                <Skeleton
                  width={200}
                  height={36}
                />
              </div>
            </Card>
          }
        />
      </div>
    );
  }

  return (
    <div className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
      <ToggleFeatures
        name="isAppRedesigned"
        on={
          <CardRedesigned className={styles.card}>
            <div className={styles.imgWrapper}>
              <SkeletonRedesigned
                width={200}
                height={200}
                className={styles.img}
              />
            </div>
            <div className={styles.infoWrapper}>
              <SkeletonRedesigned
                width={130}
                height={16}
              />
            </div>
            <SkeletonRedesigned
              width={150}
              height={16}
              className={styles.title}
            />
          </CardRedesigned>
        }
        off={
          <Card className={styles.card}>
            <div className={styles.imgWrapper}>
              <Skeleton
                width={200}
                height={200}
                className={styles.img}
              />
            </div>
            <div className={styles.infoWrapper}>
              <Skeleton
                width={130}
                height={16}
              />
            </div>
            <Skeleton
              width={150}
              height={16}
              className={styles.title}
            />
          </Card>
        }
      />
    </div>
  );
});

export { ArticleListItemSkeleton };
