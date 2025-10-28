import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <img className="logo" src="assets/logo.png" alt="Logo" />

        <nav>
          <div className="LinksNav">
            <button className="btn-fondo">Inicio</button>
            <button className="btn-fondo">Iniciar Sesion</button>
            <button className="btn-fondo">Caracteristicas</button>
            <button className="btn-fondo">CTA</button>
          </div>
        </nav>

        <div className="busqueda">
          <input type="text" placeholder="Buscar..." />
          <button type="submit">🔍</button>
        </div>
      </header>
    </>
  )
}

export default App
