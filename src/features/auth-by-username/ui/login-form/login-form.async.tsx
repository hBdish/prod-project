import { FC, lazy } from 'react';
import { LoginFormProps } from './login-form';

const LoginFormAsync = lazy <FC<LoginFormProps>>(() => import('./login-form')
  .then((module) => ({ default: module.LoginForm })));

export { LoginFormAsync as LoginFormLazy };
