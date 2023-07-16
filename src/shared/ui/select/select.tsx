import { classNames, Mods } from 'shared';
import { ChangeEvent, memo, useMemo } from 'react';
import styles from './select.module.scss';

export interface SelectOptions<T extends string> {
  value: T
  content: string
}

interface SelectProps<T extends string> {
  className?: string
  label?: string
  options?: SelectOptions<T>[]
  value?: T
  onChange?: (value: T) => void
  readonly?: boolean
}

const Select = <T extends string>(props: SelectProps<T>) => {
  const {
    className,
    label,
    options,
    value,
    onChange,
    readonly,
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  const optionList = useMemo(() => options?.map((opt) => (
    <option
      className={styles.option}
      value={opt.value}
      key={opt.value}
    >
      {opt.content}
    </option>
  )), [options]);

  const mods: Mods = {

  };

  return (
    <div className={classNames(styles.Wrapper, mods, [className])}>
      { label && (
      <span className={styles.label}>
        {`${label}>`}
      </span>
      )}
      <select
        className={styles.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {optionList}
      </select>
    </div>

  );
};

export { Select };
