import { useTranslation } from 'react-i18next';
import { Button, classNames } from '@/shared';
import styles from './page-error.module.scss';

interface PageErrorProps {
  className?: string;
}

const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation('page-error');

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(styles.pageError, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  );
};

export { PageError };
