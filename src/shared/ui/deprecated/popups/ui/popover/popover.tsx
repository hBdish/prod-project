import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { classNames } from '@/shared';
import { DropdownDirection } from '../../types/types';
import styles from './popover.module.scss';

interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  direction?: DropdownDirection;
  children: ReactNode;
}

/**
 *
 * @deprecated
 */
const Popover = (props: PopoverProps) => {
  const { className, trigger, direction = 'bottomLeft', children } = props;

  const additional = [className, styles[direction]];

  return (
    <HPopover className={classNames(styles.Popover, {}, [className])}>
      <HPopover.Button
        as="div"
        className={styles.trigger}
      >
        {trigger}
      </HPopover.Button>

      <HPopover.Panel className={classNames(styles.panel, {}, additional)}>{children}</HPopover.Panel>
    </HPopover>
  );
};

export { Popover };
