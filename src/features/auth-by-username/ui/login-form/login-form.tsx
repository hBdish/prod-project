import {
  Button,
  ButtonTheme,
  classNames,
  Input,
  ReducersList,
  Text,
  TextTheme,
  useAppDispatch,
  useDynamicModuleLoader,
} from 'shared';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';

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
  onSuccess: () => void
}

const initialReducers: ReducersList = {
  login: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);
  useDynamicModuleLoader({ reducers: initialReducers });

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    // console.log(result);
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [onSuccess, dispatch, password, username]);

  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Text
        title={t('Форма авторизации') || ''}
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
        placeholder={t('Введите логин') || ''}
        type="text"
        className={styles.input}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        placeholder={t('Введите пароль') || ''}
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
