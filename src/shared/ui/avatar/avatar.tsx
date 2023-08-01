import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared';
import styles from './avatar.module.scss';

interface AvatarProps {
  className?: string
  src?: string
  size?: number
  alt?: string
}

const Avatar = (props: AvatarProps) => {
  const {
    className,
    src,
    size,
    alt = '',
  } = props;

  const style = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
  }), [size]);

  return (
    <img
      src={src}
      alt={alt}
      style={style}
      className={classNames(styles.Avatar, {}, [className])}
    />
  );
};

export { Avatar };
