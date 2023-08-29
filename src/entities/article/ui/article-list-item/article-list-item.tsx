import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AppImage,
  AppLink,
  AppLinkRedesigned,
  Button,
  ButtonRedesigned,
  ButtonTheme,
  Card,
  CardRedesigned,
  classNames,
  EyeIconDeprecated,
  getRouteArticlesDetails,
  Icon,
  IconRedesigned,
  Skeleton,
  SkeletonRedesigned,
  Text,
  ToggleFeatures,
} from '@/shared';
import { ArticleBlockType, ArticleView } from '../../model/const/articleConst';
import styles from './article-list-item.module.scss';
import { Article, ArticleTextBlock } from '../../types/types';
import { ArticleTextBlockComponent } from '../article-text-block-component/article-text-block-component';
import { TextRedesigned } from '@/shared/ui/redesigned/text';

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
    <ToggleFeatures
      name="isAppRedesigned"
      on={
        <TextRedesigned
          text={article.type.join(', ')}
          className={styles.types}
        />
      }
      off={
        <Text
          text={article.type.join(', ')}
          className={styles.types}
        />
      }
    />
  );

  const views = (
    <ToggleFeatures
      name="isAppRedesigned"
      on={
        <>
          <TextRedesigned
            text={String(article.views)}
            className={styles.views}
          />
          <IconRedesigned Svg={EyeIconDeprecated} />
        </>
      }
      off={
        <>
          <Text
            text={String(article.views)}
            className={styles.views}
          />
          <Icon Svg={EyeIconDeprecated} />
        </>
      }
    />
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
        <ToggleFeatures
          name="isAppRedesigned"
          on={
            <CardRedesigned className={styles.card}>
              <div className={styles.header}>
                <TextRedesigned
                  text={article.createdAt}
                  className={styles.date}
                />
              </div>
              <TextRedesigned
                title={article.title}
                className={styles.title}
              />
              {types}
              <AppImage
                fallback={
                  <SkeletonRedesigned
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
                <AppLinkRedesigned
                  target={target}
                  to={getRouteArticlesDetails(article.id)}
                >
                  <ButtonRedesigned variant="outline">{t('Читать далее')}</ButtonRedesigned>
                </AppLinkRedesigned>
                {views}
              </div>
            </CardRedesigned>
          }
          off={
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
          }
        />
      </div>
    );
  }

  return (
    <ToggleFeatures
      name="isAppRedesigned"
      on={
        <AppLinkRedesigned
          data-testid="ArticleListItem"
          target={target}
          to={getRouteArticlesDetails(article.id)}
          className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}
        >
          <CardRedesigned className={styles.card}>
            <div className={styles.imgWrapper}>
              <AppImage
                fallback={
                  <SkeletonRedesigned
                    width={200}
                    height={200}
                  />
                }
                src={article.img}
                alt={article.title}
                className={styles.img}
              />
              <TextRedesigned
                text={article.createdAt}
                className={styles.date}
              />
            </div>
            <div className={styles.infoWrapper}>
              {types}
              {views}
            </div>
            <TextRedesigned
              text={article.title}
              className={styles.title}
            />
          </CardRedesigned>
        </AppLinkRedesigned>
      }
      off={
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
      }
    />
  );
});

export { ArticleListItem };
