import { ReactElement, ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { ReducersMapObject } from '@reduxjs/toolkit';

import { StateSchema, StoreProvider } from '../../../app/providers';
import i18nForTest from '@/shared/config/i18n/i18nForTest';

export interface componentRenderOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
}

export default function componentRender(
  component: ReactNode | ReactElement,
  options: componentRenderOptions = {},
) {
  const {
    route = '/',
    initialState,
    asyncReducers,
  } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
        <I18nextProvider i18n={i18nForTest}>
          {component}
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
}