import { classNames } from '@/shared';
import styles from './loader.module.scss';

interface LoaderProps {
  className?: string;
}

const Loader = ({ className }: LoaderProps) => (
  <div className={classNames(styles.ldsSpinner, {}, [className])}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);

export { Loader };
