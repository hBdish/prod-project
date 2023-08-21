import { AppLogoIconDeprecated, classNames, Hstack } from '@/shared';
import styles from './app-logo.module.scss';

interface AppLogoProps {
  className?: string;
  size?: number;
}

const AppLogo = (props: AppLogoProps) => {
  const { className, size = 100 } = props;

  return (
    <Hstack
      justify="center"
      className={classNames(styles.appLogoWrapper, {}, [className])}
    >
      <div className={styles.gradientBig} />
      <div className={styles.gradientSmall} />
      <AppLogoIconDeprecated
        color="black"
        width={size}
        height={size}
      />
    </Hstack>
  );
};

export { AppLogo };
