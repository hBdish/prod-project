import { useState } from 'react';
import { classNames, Icon, StarIcon } from '@/shared';
import styles from './star-rating.module.scss';

interface StarRatingProps {
  className?: string
  onSelect?: (starsCount: number) => void
  size?: number
  selectedStars?: number
}

const stars = [1, 2, 3, 4, 5];

const StarRating = (props: StarRatingProps) => {
  const {
    className,
    onSelect,
    size = 30,
    selectedStars = 0,
  } = props;
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div className={classNames(styles.StarRating, {}, [className])}>
      {stars.map((starNumber) => (
        <Icon
          className={classNames(
            styles.starIcon,
            { [styles.selected]: isSelected },
            [currentStarsCount >= starNumber ? styles.hovered : styles.normal],
          )}
          Svg={StarIcon}
          width={size}
          height={size}
          key={starNumber}
          onMouseLeave={onLeave}
          onMouseEnter={onHover(starNumber)}
          onClick={onClick(starNumber)}
        />
      ))}
    </div>
  );
};

export { StarRating };
