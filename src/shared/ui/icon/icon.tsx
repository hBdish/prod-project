import React, { memo } from 'react';
import { classNames } from 'shared';
import styles from './icon.module.scss';

interface IconProps {
  className?: string
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

const Icon = memo((props: IconProps) => {
  const { className, Svg } = props;

  return (
    <Svg className={classNames(styles.Icon, {}, [className])} />
  );
});

export { Icon };
