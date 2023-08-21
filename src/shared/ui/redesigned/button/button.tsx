import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '../../../index';
import styles from './button.module.scss';

type ButtonVariant = 'clear' | 'outline';

type ButtonSize = 'size_m' | 'size_l' | 'size_xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
}

const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    variant = 'primary',
    square = false,
    size = 'size_m',
    disabled,
    ...otherProps
  } = props;

  const mods: Mods = {
    [styles.square]: square,
    [styles.disabled]: disabled,
  };

  return (
    <button
      type="button"
      className={classNames(styles.button, mods, [className, styles[variant], styles[size]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});

export { Button as ButtonRedesigned };
