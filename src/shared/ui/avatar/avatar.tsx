import { CSSProperties, useMemo } from 'react';
import { AppImage, AvatarErrorIcon, classNames, Icon, Skeleton } from '@/shared';
import styles from './avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

const Avatar = (props: AvatarProps) => {
  const { className, src, size, alt = '' } = props;

  const style = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100,
    }),
    [size],
  );

  return (
    <AppImage
      fallback={
        <Skeleton
          height={size}
          width={size}
          border="50%"
        />
      }
      errorFallback={<Icon Svg={AvatarErrorIcon} />}
      src={src}
      alt={alt}
      style={style}
      className={classNames(styles.Avatar, {}, [className])}
    />
  );
};

export { Avatar };
