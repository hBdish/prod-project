import React, { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '../../../index';
import styles from './button.module.scss';

type ButtonVariant = 'clear' | 'outline' | 'filled';

type ButtonSize = 'size_m' | 'size_l' | 'size_xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  square?: boolean;
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: ReactNode;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
}

const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    variant = 'primary',
    square = false,
    size = 'size_m',
    disabled,
    addonLeft,
    addonRight,
    ...otherProps
  } = props;

  const mods: Mods = {
    [styles.square]: square,
    [styles.disabled]: disabled,
    [styles.withAddons]: Boolean(addonLeft) || Boolean(addonRight),
  };

  return (
    <button
      type="button"
      className={classNames(styles.button, mods, [className, styles[variant], styles[size]])}
      disabled={disabled}
      {...otherProps}
    >
      <div className={styles.addonLeft}>{addonLeft}</div>
      {children}
      <div className={styles.addonRight}>{addonRight}</div>
    </button>
  );
});

export { Button as ButtonRedesigned };
