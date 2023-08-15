import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import { classNames, Mods } from '@/shared';
import styles from './input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly' | 'pattern'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  readonly?: boolean;
  pattern?: string;
}

const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    readonly = false,
    pattern = '(.*?)',
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // eslint-disable-next-line no-unused-expressions
    RegExp(pattern).test(value) && onChange?.(value) && setCaretPosition(value.length);
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

  const mods: Mods = {
    [styles.readonly]: readonly,
  };

  const caretVisible = isFocused && !readonly;

  return (
    <div className={classNames(styles.Input, mods, [className])}>
      {placeholder && <div className={styles.placeholder}>{`${placeholder}>`}</div>}
      <div className={styles.caretWrapper}>
        <input
          ref={ref}
          readOnly={readonly}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={styles.inputField}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          pattern={pattern}
          {...otherProps}
        />
        {caretVisible && (
          <span
            className={styles.caret}
            style={{ left: `${caretPosition}rem` }}
          />
        )}
      </div>
    </div>
  );
});

export { Input };
