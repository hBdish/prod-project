import { memo, useCallback } from 'react';
import {
  AppLink,
  Avatar, Button, ButtonTheme, Card, classNames, EyeIcon, Icon, Text,
} from 'shared';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config';
import styles from './article-list-item.module.scss';
import {
  Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../types/types';
import { ArticleTextBlockComponent } from '../article-text-block-component/article-text-block-component';

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
}

const ArticleListItem = memo((props: ArticleListItemProps) => {
  const {
    className,
    article,
    view,
  } = props;

  const { t } = useTranslation('article');

  const types = <Text text={article.type.join(', ')} className={styles.types} />;
  const views = (
    <>
      <Text text={String(article.views)} className={styles.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.block.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
      <div className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
        <Card className={styles.card}>
          <div className={styles.header}>
            <Text text={article.createdAt} className={styles.date} />
          </div>
          <Text title={article.title} className={styles.title} />
          {types}
          <img src={article.img} alt={article.title} className={styles.img} />
          {
            textBlock && (
              <ArticleTextBlockComponent block={textBlock} className={styles.textBlock} />
            )
          }
          <div className={styles.footer}>
            <AppLink to={RoutePath.articles_details + article.id}>
              <Button
                theme={ButtonTheme.OUTLINE}
              >
                {t('Читать далее')}
              </Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      to={RoutePath.articles_details + article.id}
      className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}
    >
      <Card
        className={styles.card}
      >
        <div className={styles.imgWrapper}>
          <img src={article.img} className={styles.img} alt={article.title} />
          <Text text={article.createdAt} className={styles.date} />
        </div>
        <div className={styles.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={styles.title} />
      </Card>
    </AppLink>
  );
});

export { ArticleListItem };
