import { classNames } from 'shared';
import { Link, LinkProps } from 'react-router-dom';
import { memo } from 'react';
import styles from './app-link.module.scss';

export enum AppLinkTheme {
  PRIMARY= 'primary',
  SECONDARY= 'secondary',
}

interface AppLinkProps extends LinkProps{
  className?: string
  theme?: AppLinkTheme
}

const AppLink = memo((props: AppLinkProps) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(styles.appLink, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});

export { AppLink };
