import { HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AppImage,
  AppLinkRedesigned,
  AvatarRedesigned,
  ButtonRedesigned,
  CardRedesigned,
  classNames,
  EyeIconDeprecated,
  getRouteArticlesDetails,
  Hstack,
  IconRedesigned,
  SkeletonRedesigned,
  Vstack,
} from '@/shared';
import styles from './article-list-item-redesigned.module.scss';
import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from '@/entities';
import { TextRedesigned } from '@/shared/ui/redesigned/text';

interface ArticleListItemRedesignedProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const ArticleListItemRedesigned = (props: ArticleListItemRedesignedProps) => {
  const { className, article, view, target } = props;

  const { t } = useTranslation('article');

  const types = (
    <TextRedesigned
      text={article.type.join(', ')}
      className={styles.types}
    />
  );

  const views = (
    <Hstack gap="8">
      <TextRedesigned
        text={String(article.views)}
        className={styles.views}
      />
      <IconRedesigned Svg={EyeIconDeprecated} />
    </Hstack>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.block.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
      <CardRedesigned
        w100
        data-testid="ArticleListItem"
        className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}
      >
        <Vstack
          w100
          gap="16"
        >
          <Hstack
            w100
            gap="8"
          >
            <AvatarRedesigned
              size={30}
              src={article.user.avatar}
            />
            <TextRedesigned
              bold
              text={article.user.username}
            />
            <TextRedesigned text={article.createdAt} />
          </Hstack>
          <TextRedesigned
            title={article.title}
            bold
          />
          <TextRedesigned
            title={article.subtitle}
            size="size_s"
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
          {textBlock?.paragraphs && (
            // <ArticleTextBlockComponent
            //   block={textBlock}
            //   className={styles.textBlock}
            // />
            <TextRedesigned
              className={styles.textBlock}
              title={textBlock.paragraphs.slice(0, 2).join(' ')}
            />
          )}
          <Hstack
            w100
            justify="between"
          >
            <AppLinkRedesigned
              target={target}
              to={getRouteArticlesDetails(article.id)}
            >
              <ButtonRedesigned variant="outline">{t('Читать далее')}</ButtonRedesigned>
            </AppLinkRedesigned>
            {views}
          </Hstack>
        </Vstack>
      </CardRedesigned>
    );
  }

  return (
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
  );
};

export { ArticleListItemRedesigned };
