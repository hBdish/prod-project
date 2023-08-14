import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { AppLink, classNames } from '@/shared';
import { DropdownDirection } from '../../types/types';
import styles from './dropdown.module.scss';

interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger?: ReactNode;
  direction?: DropdownDirection;
}

const Dropdown = (props: DropdownProps) => {
  const { className, items, trigger, direction = 'topRight' } = props;

  const additional = [className, styles[direction]];

  return (
    <Menu
      as="div"
      className={classNames(styles.DropdownTest, {}, [className])}
    >
      <Menu.Button className={styles.btn}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(styles.menu, {}, additional)}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              onClick={item.onClick}
              className={classNames(styles.item, { [styles.active]: active }, [])}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item
                key={`dropdown-key-${index}`}
                as={AppLink}
                to={item.href}
              >
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item
              key={`dropdown-key-${index}`}
              as={Fragment}
            >
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export { Dropdown };
