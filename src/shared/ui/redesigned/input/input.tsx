import React, { InputHTMLAttributes, memo, ReactNode, useEffect, useRef, useState } from 'react';
import { classNames, Hstack, Mods } from '@/shared';
import styles from './input.module.scss';
import { TextRedesigned } from '../text';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly' | 'pattern'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  readonly?: boolean;
  pattern?: string;
  label?: string;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
}

const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    autoFocus,
    readonly = false,
    placeholder,
    pattern = '(.*?)',
    addonLeft,
    addonRight,
    label = '',
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // eslint-disable-next-line no-unused-expressions
    RegExp(pattern).test(value) && onChange?.(value);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  useEffect(() => {
    if (autoFocus) {
      ref.current?.focus();
      setIsFocused(true);
    }
  }, [autoFocus]);

  const mods: Mods = {
    [styles.readonly]: readonly,
    [styles.focused]: isFocused,
    [styles.withAddonLeft]: Boolean(addonLeft),
    [styles.withAddonRight]: Boolean(addonRight),
  };

  const input = (
    <div className={classNames(styles.Input, mods, [className])}>
      <div className={styles.addonLeft}>{addonLeft}</div>
      <input
        ref={ref}
        readOnly={readonly}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={styles.inputField}
        onFocus={onFocus}
        onBlur={onBlur}
        pattern={pattern}
        placeholder={placeholder}
        {...otherProps}
      />
      <div className={styles.addonRight}>{addonRight}</div>
    </div>
  );

  if (label) {
    return (
      <Hstack
        w100
        gap="8"
      >
        <TextRedesigned text={label} />
        {input}
      </Hstack>
    );
  }

  return input;
});

export { Input as InputRedesigned };
