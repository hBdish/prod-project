import { Fragment, ReactNode, useMemo } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { ArrowIcon, ButtonRedesigned, classNames, Hstack, IconRedesigned } from '@/shared';
import { DropdownDirection } from '../../types/types';
import styles from './list-box.module.scss';

interface ListBoxItem<T extends string> {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps<T extends string> {
  items: ListBoxItem<T>[];
  direction?: DropdownDirection;
  className?: string;
  value?: string;
  label?: string;
  defaultValue?: string;
  readonly?: boolean;
  onChange?: (value: T) => void;
}

function ListBox<T extends string>(props: ListBoxProps<T>) {
  const {
    items,
    className,
    value,
    defaultValue,
    readonly,
    direction = 'bottom',
    label,
    onChange,
  } = props;

  const additional = [styles[direction]];

  const selectedItem = useMemo(() => items?.find((item) => item.value === value), [items, value]);

  return (
    <Hstack gap="8">
      {label && <span>{`${label}>`}</span>}
      <HListBox
        disabled={readonly}
        as="div"
        className={classNames('', {}, [className])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button className={styles.trigger}>
          <ButtonRedesigned
            variant="filled"
            addonRight={<IconRedesigned Svg={ArrowIcon} />}
            disabled={readonly}
          >
            {selectedItem?.content ?? defaultValue}
          </ButtonRedesigned>
        </HListBox.Button>
        <HListBox.Options className={classNames(styles.options, {}, additional)}>
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(
                    styles.item,
                    {
                      [styles.active]: active,
                      [styles.disabled]: item.disabled,
                      [styles.selected]: selected,
                    },
                    [],
                  )}
                >
                  {selected}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </Hstack>
  );
}

export { ListBox as ListBoxRedesigned };
