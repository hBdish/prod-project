import { classNames } from 'shared';
import { ButtonHTMLAttributes, FC } from 'react';
import styles from './button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string
  theme?: ThemeButton
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...otherProps
  } = props;
  return (
    <button
      type="button"
      className={classNames(styles.button, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export { Button };
