import { ReactElement } from 'react';
import { classNames } from '@/shared';
import styles from './sticky-layout.module.scss';

interface StickyLayoutProps {
  className?: string;
  left?: ReactElement;
  content: ReactElement;
  right?: ReactElement;
}

const StickyLayout = (props: StickyLayoutProps) => {
  const { className, left, content, right } = props;

  return (
    <div className={classNames(styles.StickyLayout, {}, [className])}>
      {left && <div className={styles.left}>{left}</div>}
      <div className={styles.content}>{content}</div>
      {right && <div className={styles.right}>{right}</div>}
    </div>
  );
};

export { StickyLayout };
