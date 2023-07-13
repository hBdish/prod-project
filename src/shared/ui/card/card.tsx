import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from 'shared';
import styles from './card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  className?: string
  children: ReactNode
}

const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    ...otherProps
  } = props;

  return (
    <div
      {...otherProps}
      className={classNames(styles.Card, {}, [className])}
    >
      {children}
    </div>
  );
});

export { Card };
