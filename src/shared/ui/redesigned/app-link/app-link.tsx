import { LinkProps, NavLink } from 'react-router-dom';
import { memo } from 'react';
import { classNames } from '@/shared';
import styles from './app-link.module.scss';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  activeClassName?: string;
}

const AppLinkRedesigned = memo((props: AppLinkProps) => {
  const { to, className, children, variant = 'primary', activeClassName = '', ...otherProps } = props;

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames('', { [activeClassName]: isActive }, [className, styles[variant]])
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  );
});

export { AppLinkRedesigned };
