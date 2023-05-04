import {render} from "react-dom";
import {App} from "./components";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./theme/theme.provider";


render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
  ,
  document.getElementById('root')
)
