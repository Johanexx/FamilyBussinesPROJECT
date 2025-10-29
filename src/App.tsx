import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <header>
        <img className="logo" src="assets/logo.png" alt="Logo" />
        <nav>
          <div className="LinksNav">
            <Link to="/home" className="btn-fondo">Inicio</Link>
            <Link to="/login" className="btn-fondo">Iniciar Sesión</Link>
            <Link to="/caracteristicas" className="btn-fondo">Características</Link>
            <Link to="/cta" className="btn-fondo">CTA</Link>
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
