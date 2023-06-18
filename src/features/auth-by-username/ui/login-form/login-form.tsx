import {
  Button, ButtonTheme, classNames, Input, Text, TextTheme,
} from 'shared';
import { useTranslation } from 'react-i18next';
import { useSelector, useStore } from 'react-redux';
import { memo, useCallback, useEffect } from 'react';
import { ReduxStoreWithManager, useAppDispatch } from 'app/providers';
import {
  loginByUsername,
} from '../../model/services';
import {
  loginReducer,
  loginActions,
} from '../../model/slice';
import {
  getLoginError,
  getLoginIsLoading,
  getLoginPassword,
  getLoginUsername,
} from '../../model/selectors';

import styles from './login-form.module.scss';

export interface LoginFormProps {
  className?: string
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const store = useStore() as ReduxStoreWithManager; // TODO ВРЕМЕННОЙ РЕШЕНИЕ

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

  useEffect(() => {
    store.reducerManager.add('login', loginReducer);
    dispatch({ type: '@INIT loginForm reducer' });

    return () => {
      store.reducerManager.remove('login');
      dispatch({ type: '@DESTROY loginForm reducer' });
    };
  }, []); // eslint-disable-line

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Text
        title={t('Форма авторизации')}
        theme={TextTheme.PRIMARY}
      />
      {error && (
      <Text
        theme={TextTheme.ERROR}
        text={error}
      />
      )}
      <Input
        autoFocus
        placeholder={t('Введите логин')}
        type="text"
        className={styles.input}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        placeholder={t('Введите пароль')}
        type="text"
        className={styles.input}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={styles.loginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Авторизация')}
      </Button>
    </div>
  );
});

export { LoginForm };
