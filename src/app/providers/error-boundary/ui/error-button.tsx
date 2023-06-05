import { Button, classNames } from 'shared';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface ErrorButtonProps {
  className?: string
}

// TEST COMPONENT
const ErrorButton = ({ className }: ErrorButtonProps) => {
  const [error, setError] = useState(false);

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
      throw Error
    </Button>
  );
};

export { ErrorButton };
