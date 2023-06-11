import { classNames } from 'shared';
import { Modal } from 'widgets';
import { LoginForm } from '../login-form/login-form';

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

const LoginModal = (props: LoginModalProps) => {
  const {
    onClose,
    isOpen,
  } = props;

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      className={classNames('', {}, [''])}
      lazy
    >
      <LoginForm />
    </Modal>
  );
};

export { LoginModal };
