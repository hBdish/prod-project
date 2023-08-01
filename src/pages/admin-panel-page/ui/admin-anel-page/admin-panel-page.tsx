import { memo } from 'react';
import { classNames } from '@/shared';
import cls from './admin-panel-page.module.scss';

interface AdminPanelPageProps {
  className?: string;
}

export const AdminPanelPage = memo((props: AdminPanelPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.AdminPanelPage, {}, [className])}>
      <div />
    </div>
  );
});
