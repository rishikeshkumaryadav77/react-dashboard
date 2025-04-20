import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
// import './index.css'
// import App from './App.jsx'
import Header from './landingPage/Header.jsx'
import Banner from './landingPage/Banner.Jsx'
import Main from './landingPage/Main.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Banner />
    <Main />
    
  </StrictMode>,
)
