import { memo } from 'react';
import { classNames, Text } from 'shared';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

// import styles from './article-create-page.module.scss';

interface ArticleEditPageProps {
  className?: string
}

const ArticleCreatePage = memo((props: ArticleEditPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const navigate = useNavigate();

  // const onBackToList = useCallback(() => {
  //   navigate(RoutePath.articles);
  // }, [navigate]);

  return (
    <div className={classNames('', {}, [className])}>
      <Text title={t('Создание статьи')} />
    </div>
  );
});

export { ArticleCreatePage };
