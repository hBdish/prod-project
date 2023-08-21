import { AppLogoIcon, classNames, Hstack } from '@/shared';
import styles from './app-logo.module.scss';

interface AppLogoProps {
  className?: string;
}

/**
 *
 * @deprecated
 */
const AppLogo = (props: AppLogoProps) => {
  const { className } = props;

  return (
    <Hstack
      justify="center"
      className={classNames(styles.appLogoWrapper, {}, [className])}
    >
      <div className={styles.gradientBig} />
      <div className={styles.gradientSmall} />
      <AppLogoIcon className={styles.appLogo} />
    </Hstack>
  );
};

export { AppLogo };
