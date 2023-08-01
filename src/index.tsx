import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StoreProvider, ThemeProvider } from '@/app/providers';
import { App } from '@/app/App';
import './app/styles/index.scss';
import '@/shared/config/i18n/i18n';
import { ErrorBoundary } from '@/app/providers/error-boundary';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Контейнер root не найден. НЕ удалось вмонтировать реакт приложение');
}

const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
);
