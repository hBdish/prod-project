import React, { memo } from 'react';
import { classNames } from '@/shared';
import styles from './icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

/**
 *
 * @deprecated
 */
const Icon = memo((props: IconProps) => {
  const { className, Svg, ...otherProps } = props;

  return (
    <Svg
      className={classNames(styles.Icon, {}, [className])}
      {...otherProps}
    />
  );
});

export { Icon };
