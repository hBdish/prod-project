import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared';
import styles from './card.module.scss';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINE = 'outline',
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  className?: string
  children: ReactNode
  theme?: CardTheme
  w100?: boolean
}

const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    theme = CardTheme.NORMAL,
    w100 = false,
    ...otherProps
  } = props;

  return (
    <div
      {...otherProps}
      className={classNames(styles.Card, { [styles.w100]: w100 }, [className, styles[theme]])}
    >
      {children}
    </div>
  );
});

export { Card };
