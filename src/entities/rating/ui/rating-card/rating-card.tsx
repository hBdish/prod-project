import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';
import {
  Button,
  ButtonTheme,
  Card,
  classNames,
  Drawer,
  Hstack,
  Input,
  Modal,
  Text,
  Vstack,
} from '@/shared';
import { StarRating } from '@/shared/ui/star-rating/star-rating';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  rate?: number;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
}

const RatingCard = (props: RatingCardProps) => {
  const { className, title, feedbackTitle, hasFeedback, rate = 0, onCancel, onAccept } = props;

  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');
  const onSelectedStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
      setIsModalOpen(true);
    },
    [hasFeedback, onAccept],
  );

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [onAccept, starsCount, feedback]);

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <Vstack
      w100
      gap="32"
    >
      <Text title={feedbackTitle} />
      <Input
        data-testid="RatingCard.Input"
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
        <Button
          data-testid="RatingCard.Close"
          onClick={cancelHandler}
          theme={ButtonTheme.OUTLINE_RED}
        >
          {t('Закрыть') ?? ''}
        </Button>
        <Button
          data-testid="RatingCard.Send"
          onClick={acceptHandler}
        >
          {t('Отправить') ?? ''}
        </Button>
      </Hstack>
    </Vstack>
  );

  return (
    <Card
      data-testid="RatingCard"
      w100
      className={classNames('', {}, [className])}
    >
      <Vstack
        align="center"
        gap="8"
      >
        {!starsCount && <Text title={title} />}
        <StarRating
          selectedStars={starsCount}
          size={40}
          onSelect={onSelectedStars}
        />
      </Vstack>

      {isMobile ? (
        <Drawer
          isOpen={isModalOpen}
          lazy
        >
          {modalContent}
        </Drawer>
      ) : (
        <Modal
          isOpen={isModalOpen}
          onClose={cancelHandler}
          lazy
        >
          {modalContent}
        </Modal>
      )}
    </Card>
  );
};

export { RatingCard };
