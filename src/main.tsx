import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './sass/style.scss'
import App from './App.tsx'

// biome-ignore lint/style/noNonNullAssertion: this will always be defined
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
