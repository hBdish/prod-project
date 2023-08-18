import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Modal, Text, useAppDispatch } from '@/shared';
import { saveJsonSettings, useJsonSettings } from '@/entities';

interface AtriclePageGreetingProps {
  className?: string;
}

const ArticlePageGreeting = (props: AtriclePageGreetingProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { isArticlesPageWasOpened } = useJsonSettings();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isArticlesPageWasOpened) {
      setIsOpen(true);
      dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
    }
  }, [dispatch, isArticlesPageWasOpened]);

  const onClose = () => setIsOpen(false);

  return (
    <Modal
      className={classNames(styles.AtriclePageGreeting, {}, [className])}
      isOpen={isOpen}
      lazy
      onClose={onClose}
    >
      <Text title={t('Добро пожаловать')} />
    </Modal>
  );
};

export { ArticlePageGreeting };
