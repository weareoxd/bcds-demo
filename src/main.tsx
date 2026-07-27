import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import SamplePage from './pages/SamplePage.tsx'
import { StyleProvider } from './styleContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <StyleProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/sample" element={<SamplePage />} />
        </Routes>
      </StyleProvider>
    </BrowserRouter>
  </StrictMode>,
)
