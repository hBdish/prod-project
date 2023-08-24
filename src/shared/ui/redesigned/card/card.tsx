import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared';
import styles from './card.module.scss';

type CardVariant = 'normal' | 'outline' | 'light';
type CardBorder = 'normal' | 'round';
type CardPadding = '0' | '8' | '16' | '24' | '32';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  w100?: boolean;
  padding?: CardPadding;
  border?: CardBorder;
}

const Card = memo((props: CardProps) => {
  const {
    className,
    border = 'normal',
    children,
    variant = 'normal',
    w100 = false,
    padding = '8',
    ...otherProps
  } = props;

  return (
    <div
      {...otherProps}
      style={{ padding: `${padding}px` }}
      className={classNames(styles.Card, { [styles.w100]: w100 }, [
        className,
        styles[variant],
        styles[border],
      ])}
    >
      {children}
    </div>
  );
});

export { Card as CardRedesigned };
