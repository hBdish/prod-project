import { classNames } from '@/shared';
import styles from './overlay.module.scss';

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

const Overlay = (props: OverlayProps) => {
  const { className, onClick } = props;

  return (
    <div
      onClick={onClick}
      className={classNames(styles.Overlay, {}, [className])}
    />
  );
};

export { Overlay };
