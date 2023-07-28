import { classNames } from 'shared';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {
  className?: string;
}

export const AdminPanelPage = memo((props: AdminPanelPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.AdminPanelPage, {}, [className])}>
      <div />
    </div>
  );
});