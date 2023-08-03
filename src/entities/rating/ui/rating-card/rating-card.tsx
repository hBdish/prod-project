import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';
import {
  Button, ButtonTheme, Card, classNames, Drawer, Hstack, Input, Text, Vstack,
} from '@/shared';
import { StarRating } from '@/shared/ui/star-rating/star-rating';
import { Modal } from '@/widgets';

//

interface RatingCardProps {
  className?: string
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  onCancel?: (starsCount: number) => void
  onAccept?: (starsCount: number, feedback?: string) => void
}

const RatingCard = (props: RatingCardProps) => {
  const {
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onCancel,
    onAccept,
  } = props;

  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(0);
  const [feedback, setFeedback] = useState('');
  const onSelectedStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);
    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onAccept?.(selectedStarsCount);
    }
    setIsModalOpen(true);
  }, [hasFeedback, onAccept]);

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [onAccept, starsCount, feedback]);

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <Vstack w100 gap="32">
      <Text title={feedbackTitle} />
      <Input
        value={feedback}
        onChange={setFeedback}
        placeholder={t('Ваш отзыв') ?? ''}
      />
      <Hstack
        w100
        gap="16"
        align="center"
        justify="center"
      >
        <Button onClick={cancelHandler} theme={ButtonTheme.OUTLINE_RED}>
          {t('Закрыть') ?? ''}
        </Button>
        <Button onClick={acceptHandler}>
          {t('Отправить') ?? ''}
        </Button>
      </Hstack>
    </Vstack>
  );

  return (
    <Card className={classNames('', {}, [className])}>
      <Vstack align="center" gap="8">
        <Text title={title} />
        <StarRating size={40} onSelect={onSelectedStars} />
      </Vstack>

      {isMobile
        ? (
          <Drawer isOpen={isModalOpen} lazy>
            {modalContent}
          </Drawer>
        )
        : (
          <Modal isOpen={isModalOpen} onClose={cancelHandler} lazy>
            {modalContent}
          </Modal>
        )}

    </Card>
  );
};

export { RatingCard };
