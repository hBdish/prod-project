import { memo, useCallback } from 'react';
import { Button, ButtonTheme, classNames } from 'shared';
import { RoutePath } from 'shared/config';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/article';
import { getCanEditArticle } from '../../model/selectors/article-selector';
import styles from './article-details-page-header.module.scss';

interface ArticleDetailsPageHeaderProps {
  className?: string
}

const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.articles}/${article?.id}/edit`);
  }, [navigate, article]);

  return (
    <div className={classNames(styles.ArticleDetailsPageHeader, {}, [className])}>
      <Button
        theme={ButtonTheme.OUTLINE}
        onClick={onBackToList}
      >
        {t('Назад к списку')}
      </Button>
      {canEdit && (
      <Button
        className={styles.edithBtn}
        theme={ButtonTheme.OUTLINE}
        onClick={onEditArticle}
      >
        {t('Редактировать')}
      </Button>
      )}
    </div>
  );
});

export { ArticleDetailsPageHeader };
