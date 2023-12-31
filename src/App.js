import { ThemeProvider } from 'styled-components';
import AppRouter from './router/AppRouter';
import {theme} from "./styles/theme"
// import { GlobalStyle } from './styles/Global.styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <GlobalStyle/> */}
      <AppRouter/>
    </ThemeProvider>
  );
}

export default App;
