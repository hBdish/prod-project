import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Text } from '@/shared';

// import styles from './article-create-page.module.scss';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleCreatePage = memo((props: ArticleEditPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article');

  return (
    <div className={classNames('', {}, [className])}>
      <Text title={t('Создание статьи')} />
    </div>
  );
});

export { ArticleCreatePage };
