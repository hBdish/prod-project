import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AppImage,
  AppLink,
  Button,
  ButtonTheme,
  Card,
  classNames,
  EyeIcon,
  getRouteArticlesDetails,
  Icon,
  Skeleton,
  Text,
} from '@/shared';
import { ArticleBlockType, ArticleView } from '../../model/const/articleConst';
import styles from './article-list-item.module.scss';
import { Article, ArticleTextBlock } from '../../types/types';
import { ArticleTextBlockComponent } from '../article-text-block-component/article-text-block-component';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view, target } = props;

  const { t } = useTranslation('article');

  const types = (
    <Text
      text={article.type.join(', ')}
      className={styles.types}
    />
  );
  const views = (
    <>
      <Text
        text={String(article.views)}
        className={styles.views}
      />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.block.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
      <div
        data-testid="ArticleListItem"
        className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}
      >
        <Card className={styles.card}>
          <div className={styles.header}>
            <Text
              text={article.createdAt}
              className={styles.date}
            />
          </div>
          <Text
            title={article.title}
            className={styles.title}
          />
          {types}
          <AppImage
            fallback={
              <Skeleton
                width="100%"
                height={250}
              />
            }
            src={article.img}
            alt={article.title}
            className={styles.img}
          />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={styles.textBlock}
            />
          )}
          <div className={styles.footer}>
            <AppLink
              target={target}
              to={getRouteArticlesDetails(article.id)}
            >
              <Button theme={ButtonTheme.OUTLINE}>{t('Читать далее')}</Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      data-testid="ArticleListItem"
      target={target}
      to={getRouteArticlesDetails(article.id)}
      className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}
    >
      <Card className={styles.card}>
        <div className={styles.imgWrapper}>
          <AppImage
            fallback={
              <Skeleton
                width={200}
                height={200}
              />
            }
            src={article.img}
            alt={article.title}
            className={styles.img}
          />
          <Text
            text={article.createdAt}
            className={styles.date}
          />
        </div>
        <div className={styles.infoWrapper}>
          {types}
          {views}
        </div>
        <Text
          text={article.title}
          className={styles.title}
        />
      </Card>
    </AppLink>
  );
});

export { ArticleListItem };
