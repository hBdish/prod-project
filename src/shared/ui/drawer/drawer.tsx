import {
  classNames, Mods, Overlay, Portal, useModal,
} from 'shared';
import { ReactNode } from 'react';
import styles from './drawer.module.scss';

interface DrawerProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const Drawer = (props: DrawerProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy = false,
  } = props;

  const {
    isClosing,
    close,
    isMounted,
  } = useModal({
    animationDelay: 300,
    onClose,
    isOpen,
  });

  const mods: Mods = {
    [styles.opened]: isOpen,
    [styles.closed]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(styles.Drawer, mods, [className])}>
        <Overlay onClick={close} />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export { Drawer };
