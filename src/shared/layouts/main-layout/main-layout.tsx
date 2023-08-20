import { ReactElement } from 'react';
import { classNames } from '@/shared';
import styles from './main-layout.module.scss';

interface MainLayoutProps {
  className?: string;
  header: ReactElement;
  content: ReactElement;
  sidebar: ReactElement;
  toolbar?: ReactElement;
}

const MainLayout = (props: MainLayoutProps) => {
  const { className, header, content, sidebar, toolbar } = props;

  return (
    <div className={classNames(styles.MainLayout, {}, [className])}>
      <div className={styles.sidebar}>{sidebar}</div>
      <div className={styles.content}>{content}</div>
      <div className={styles.rightbar}>
        <div className={styles.header}>{header}</div>
        <div className={styles.toolbar}>{toolbar}</div>
      </div>
    </div>
  );
};

export { MainLayout };
