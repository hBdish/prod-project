import { classNames } from 'shared';
import React, {
  InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import styles from './input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
  className?: string
  value?: string
  onChange?: (value: string) => void
  autoFocus?: boolean
}

const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  useEffect(() => {
    if (autoFocus) {
      ref.current?.focus();
      setIsFocused(true);
    }
  }, [autoFocus]);

  return (
    <div className={classNames(styles.Input, {}, [className])}>
      {placeholder && (
        <div className={styles.placeholder}>
          {`${placeholder}>` }
        </div>
      )}
      <div className={styles.caretWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={styles.inputField}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          {...otherProps}
        />
        {
          isFocused && (
            <span
              className={styles.caret}
              style={{ left: `${caretPosition * 10}px` }}
            />
          )
        }
      </div>

    </div>
  );
});

export { Input };
