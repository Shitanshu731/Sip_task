import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Cal from './Cal.tsx'
import Navbar from './Navbar.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <Cal />
    
  </React.StrictMode>,
)
