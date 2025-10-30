import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Caracteristicas from './ComponentCaratceristicas/Caracteristicas'
import Home from './ComponentHome/Home'
import Login from './ComponentLogin/Login'
import { CTA } from './ComponentCTA/CTA'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={< Home />} />
        <Route path="/caracteristicas" element={<Caracteristicas />} />
        <Route path="/cta" element={<CTA />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
