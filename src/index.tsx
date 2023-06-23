import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider, ThemeProvider } from 'app/providers';
import { App } from 'app/App';
import './app/styles/index.scss';
import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/error-boundary';

render(

  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
