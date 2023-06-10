import { Button, classNames, Input } from 'shared';
import { useTranslation } from 'react-i18next';
import styles from './login-form.module.scss';

interface LoginFormProps {
  className?: string
}

const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Input
        autoFocus
        placeholder={t('Введите логин')}
        type="text"
        className={styles.input}
      />
      <Input
        placeholder={t('Введите пароль')}
        type="text"
        className={styles.input}
      />
      <Button className={styles.loginBtn}>
        {t('Авторизация')}
      </Button>
    </div>
  );
};

export { LoginForm };
