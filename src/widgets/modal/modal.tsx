import { classNames, Portal } from 'shared';
import React, {
  ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { useTheme } from 'app/providers';
import styles from './modal.module.scss';

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props;

  const { theme } = useTheme();
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const ANDIMATION_DELAY = 300;

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
  };

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANDIMATION_DELAY);
    }
  }, [onClose]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div className={classNames(styles.Modal, mods, [className, theme])}>
        <div className={styles.overlay} onClick={closeHandler}>
          <div className={styles.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export { Modal };
