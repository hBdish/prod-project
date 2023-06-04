import styles from './app-link.module.scss'
import {classNames} from "shared";
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

interface AppLinkProps extends LinkProps{
  className?: string
  theme?: AppLinkTheme
}

export enum AppLinkTheme {
  PRIMARY= 'primary',
  SECONDARY= 'secondary',
}


const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props


  return (
    <Link
      to={to}
      className={classNames(styles.AppLink, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export {AppLink};
