import React, { ReactNode } from 'react';
import { classNames, Mods, Overlay, Portal, useModal } from '@/shared';

import styles from './modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose, lazy } = props;

  const { isClosing, close, isMounted } = useModal({
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
        <div className={styles.content}>{children}</div>
      </div>
    </Portal>
  );
};

export { Modal };
