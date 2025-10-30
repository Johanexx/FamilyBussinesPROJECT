import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Login from './ComponentLogin/Login'
import { Layout } from './Layout'
import Home from './ComponentHome/Home'
import Caracteristicas from './ComponentCaratceristicas/Caracteristicas'
import { CTA } from './ComponentCTA/CTA'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login fuera del layout para que no se muestre el nav */}
        <Route path="/" element={<Login />} />

        {/* Las demás rutas usan el layout con nav */}
        <Route element={<Layout />}>
          <Route path="/inicio" element={<Home />} />
          <Route path="/caracteristicas" element={<Caracteristicas />} />
          <Route path="/cta" element={<CTA />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
