import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers';
import { App } from 'app/App';
import { ErrorBoundary } from 'app/providers/error-boundary';

import './shared/config/i18n/i18n.ts';

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
);
