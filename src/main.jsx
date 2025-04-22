import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyle from './stykes/GlobalStyle.jsx'
import ProviderApp from './context/ProviderApp.jsx'
import RoutesApp from './routes/routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProviderApp>
      <GlobalStyle />
      <RoutesApp />
    </ProviderApp>
  </StrictMode>,
)
