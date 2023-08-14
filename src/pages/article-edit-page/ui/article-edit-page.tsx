import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames, Text } from '@/shared';
import { ContentPageBlock } from '@/widgets';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { className } = props;

  const { t } = useTranslation('article');
  const { id } = useParams<{ id: string }>();

  return (
    <ContentPageBlock className={classNames('', {}, [className])}>
      <Text title={t(`Редактирование статьи ${id}`) ?? ''} />
    </ContentPageBlock>
  );
});

export { ArticleEditPage };
