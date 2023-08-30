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

  const userInfo = (
    <>
      <AvatarRedesigned
        size={32}
        src={article.user.avatar}
      />
      <TextRedesigned
        bold
        text={article.user.username}
      />
    </>
  );

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
            {userInfo}

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
      <CardRedesigned
        className={styles.card}
        border="round"
      >
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
        <Vstack
          className={styles.info}
          gap="8"
        >
          <TextRedesigned
            text={article.title}
            className={styles.title}
          />
          <Vstack
            gap="8"
            w100
            className={styles.footer}
          >
            <Hstack
              justify="between"
              w100
            >
              <TextRedesigned text={article.createdAt} />
              {views}
            </Hstack>
            <Hstack gap="8">{userInfo}</Hstack>
          </Vstack>
        </Vstack>
      </CardRedesigned>
    </AppLinkRedesigned>
  );
};

export { ArticleListItemRedesigned };
