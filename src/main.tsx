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
    <App />
  </React.StrictMode>
)
