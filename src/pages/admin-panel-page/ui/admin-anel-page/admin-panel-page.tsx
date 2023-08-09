import { memo } from 'react';
import { classNames } from '@/shared';
import cls from './admin-panel-page.module.scss';
import { ContentPageBlock } from '@/widgets';

interface AdminPanelPageProps {
  className?: string;
}

export const AdminPanelPage = memo((props: AdminPanelPageProps) => {
  const { className } = props;

  return (
    <ContentPageBlock
      data-testid="AdminPanelPage"
      className={classNames(cls.AdminPanelPage, {}, [className])}
    >
      <div />
    </ContentPageBlock>
  );
});
