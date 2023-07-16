import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from 'shared';
import styles from './card.module.scss';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINE = 'outline',
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  className?: string
  children: ReactNode
  theme?: CardTheme
}

const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    theme = CardTheme.NORMAL,
    ...otherProps
  } = props;

  return (
    <div
      {...otherProps}
      className={classNames(styles.Card, {}, [className, styles[theme]])}
    >
      {children}
    </div>
  );
});

export { Card };
