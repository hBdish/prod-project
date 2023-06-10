import { classNames } from 'shared';
import { Modal } from 'widgets';
import styles from './login-modal.module.scss';
import { LoginForm } from '../login-form/login-form';

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

const LoginModal = (props: LoginModalProps) => {
  const {
    className,
    onClose,
    isOpen,
  } = props;

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      className={classNames(styles.LoginModal, {}, [className])}
      lazy
    >
      <LoginForm />
    </Modal>
  );
};

export { LoginModal };
