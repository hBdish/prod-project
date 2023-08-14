import { classNames, Loader } from '@/shared';
import styles from './page-loader.module.scss';

interface PageLoaderProps {
  className?: string;
}

const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={classNames(styles.pageLoader, {}, [className])}>
    <Loader />
  </div>
);

export { PageLoader };
