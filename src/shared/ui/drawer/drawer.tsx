import {
  classNames, Mods, Overlay, Portal,
} from 'shared';
import { ReactNode } from 'react';
import styles from './drawer.module.scss';

interface DrawerProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

const Drawer = (props: DrawerProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props;

  const mods: Mods = {
    [styles.opened]: isOpen,
  };

  return (
    <Portal>
      <div className={classNames(styles.Drawer, mods, [className])}>
        <Overlay onClick={onClose} />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export { Drawer };
