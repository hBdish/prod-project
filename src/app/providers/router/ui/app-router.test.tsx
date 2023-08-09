import { screen } from '@testing-library/react';
import componentRender from '../../../../shared/lib/test/component-render';
import { AppRouter } from './app-router';
import { getRouteAbout, getRouteAdminPanel, getRouteProfile } from '@/shared';

describe('app/router/app-router', () => {
  test('render', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAbout(),
    });

    const page = await screen.findByTestId('AboutPage');
    expect(page).toBeInTheDocument();
  });

  test('NotFoundPage', async () => {
    componentRender(<AppRouter />, {
      route: '/error__',
    });

    const page = await screen.findByTestId('NotFoundPage');
    expect(page).toBeInTheDocument();
  });

  test('Redirect', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
    });

    const page = await screen.findByTestId('MainPage');
    expect(page).toBeInTheDocument();
  });

  test('render admin panel', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: {
          _inited: true,
          authData: {
            role: 'ADMIN',
          },
        },
      },
    });

    const page = await screen.findByTestId('AdminPanelPage');
    expect(page).toBeInTheDocument();
  });

  test('redirect from admin panel', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: {
          _inited: true,
          authData: { },
        },
      },
    });

    const page = await screen.findByTestId('MainPage');
    expect(page).toBeInTheDocument();
  });
});
