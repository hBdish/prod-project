import React, { memo } from 'react';
import { classNames } from '@/shared';
import styles from './icon.module.scss';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

interface NonClickableIconProps extends IconBaseProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  clickable?: false;
}

interface ClickableIconProps extends IconBaseProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  clickable: true;
  onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableIconProps;

const Icon = memo((props: IconProps) => {
  const { className, Svg, width = 32, height = 32, clickable, ...otherProps } = props;
  const icon = (
    <Svg
      className={classNames(styles.Icon, {}, [])}
      width={width}
      height={height}
      {...otherProps}
      onClick={undefined}
    />
  );

  if (clickable) {
    return (
      <button
        className={classNames(styles.button, {}, [className])}
        onClick={props.onClick}
        type="button"
      >
        {icon}
      </button>
    );
  }

  return icon;
});

export { Icon as IconRedesigned };
