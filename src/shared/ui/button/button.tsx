import styles from './button.module.scss'
import {classNames} from "shared";
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string
  theme?: ThemeButton
}


const Button: FC<ButtonProps> = (props) => {

  const  {
    className,
    children,
    theme,
    ...otherProps
  } = props
  return (
    <button
      className={classNames(styles.Button, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export {Button};
