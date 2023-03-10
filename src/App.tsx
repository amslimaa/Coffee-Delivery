import { Nav } from "./components/Nav"
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from "./styles/themes/default"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Nav />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
