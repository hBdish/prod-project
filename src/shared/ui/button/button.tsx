import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '../../../shared';
import styles from './button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outlineRed',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
  CLEAR_INVERTED = 'clearInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
}

const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    square = false,
    size = ButtonSize.M,
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
      className={classNames(styles.button, mods, [className, styles[theme], styles[size]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});

export { Button };
