import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared';
import cls from './admin-panel-page.module.scss';
import { ContentPageBlock } from '@/widgets';

interface AdminPanelPageProps {
  className?: string;
}

export const AdminPanelPage = memo((props: AdminPanelPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <ContentPageBlock
      data-testid="AdminPanelPage"
      className={classNames(cls.AdminPanelPage, {}, [className])}
    >
      {t('AdminPanelPage')}
    </ContentPageBlock>
  );
});
