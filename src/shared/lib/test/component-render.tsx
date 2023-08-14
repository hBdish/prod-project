import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider, ThemeProvider } from '../../../app/providers';
import i18nForTest from '@/shared/config/i18n/i18nForTest';
import { classNames, Theme } from '@/shared';
// eslint-disable-next-line pc-test/layer-imports
import '@/app/styles/index.scss';

export interface componentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
  theme?: Theme;
}

interface TestProviderProps {
  children: ReactNode;
  options?: componentRenderOptions;
}

export function TestProvider(props: TestProviderProps) {
  const { children, options = {} } = props;

  const { route = '/', initialState, asyncReducers, theme = Theme.DARK } = options;

  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider
        asyncReducers={asyncReducers}
        initialState={initialState}
      >
        <I18nextProvider i18n={i18nForTest}>
          <ThemeProvider initialTheme={theme}>
            <div className={classNames('app', {}, [theme])}>{children}</div>
          </ThemeProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
}

export default function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
  return render(<TestProvider options={options}>{component}</TestProvider>);
}
