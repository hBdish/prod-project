import { HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AppImage,
  AppLink,
  Button,
  ButtonTheme,
  Card,
  classNames,
  EyeIconDeprecated,
  getRouteArticlesDetails,
  Icon,
  Skeleton,
  Text,
} from '@/shared';
import styles from './article-list-item-deprecated.module.scss';
import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from '@/entities';
import { ArticleTextBlockComponent } from '../../article-text-block-component';

interface ArticleListItemDeprecatedProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const ArticleListItemDeprecated = (props: ArticleListItemDeprecatedProps) => {
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
      <Icon Svg={EyeIconDeprecated} />
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
};

export { ArticleListItemDeprecated };
