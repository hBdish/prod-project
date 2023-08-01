import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, classNames } from '@/shared';

interface ErrorButtonProps {
  className?: string
}

// TEST COMPONENT
const ErrorButton = ({ className }: ErrorButtonProps) => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();
  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button
      onClick={onThrow}
      className={classNames('', {}, [className])}
    >
      {t('ошибка')}
    </Button>
  );
};

export { ErrorButton };
