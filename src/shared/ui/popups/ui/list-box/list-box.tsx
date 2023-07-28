import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { Button, classNames, Hstack } from 'shared';
import { DropdownDirection } from '../../types/types';
import styles from './list-box.module.scss';

interface ListBoxItem {
  value: string
  content: ReactNode
  disabled?: boolean
}

interface ListBoxProps {
  items: ListBoxItem[]
  direction?: DropdownDirection
  className?: string
  value?: string
  label?: string
  defaultValue?: string
  readonly?: boolean
  onChange?: <T extends string>(value: T) => void
}

function ListBox(props: ListBoxProps) {
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

  const additional = [
    styles[direction],
  ];

  return (
    <Hstack gap="8">
      {label && <span>{`${label}>`}</span>}
      <HListBox
        disabled={readonly}
        as="div"
        className={classNames(styles.ListBox, {}, [className])}
        value={value}
        onChange={onChange}
      >

        <HListBox.Button
          className={styles.trigger}
        >
          <Button disabled={readonly}>
            {value ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options
          className={classNames(styles.options, {}, additional)}
        >
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li className={classNames(styles.item, {
                  [styles.active]: active,
                  [styles.disabled]: item.disabled,
                }, [])}
                >
                  {selected && '!!!'}
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

export { ListBox };
