import { Suspense } from 'react';
import { classNames, Loader } from '@/shared';
import { Modal } from '@/widgets';
import { LoginFormLazy } from '../login-form/login-form.async';

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
      <Suspense fallback={<Loader />}>
        <LoginFormLazy onSuccess={onClose} />
      </Suspense>

    </Modal>
  );
};

export { LoginModal };
