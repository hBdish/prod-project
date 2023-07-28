import {
  classNames, Mods, Overlay, Portal,
} from 'shared';
import React, { ReactNode } from 'react';
import { useModal } from 'shared/lib/hooks/use-modal/use-modal';
import styles from './modal.module.scss';

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy,
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
    [styles.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(styles.Modal, mods, [className])}>
        <Overlay onClick={close} />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export { Modal };
