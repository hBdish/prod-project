import { memo, useCallback } from 'react';
import { classNames, Text } from 'shared';
import { ContentPageBlock } from 'widgets';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getCanEditArticle } from 'pages';
import { RoutePath } from 'shared/config';
// import styles from './article-edit-page.module.scss';

interface ArticleEditPageProps {
  className?: string
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { className } = props;

  const { t } = useTranslation('article');
  const { id } = useParams<{id: string}>();
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  return (
    <ContentPageBlock className={classNames(styles.ArticleEditPage, {}, [className])}>
      <Text title={t(`Редактирование статьи ${id}`) ?? ''} />
    </ContentPageBlock>
  );
});

export { ArticleEditPage };
