import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./App.css";

export const Layout = () => {
    return (
            <>
                <nav className="navbar">
                    <div className="navbar-logo">
                        <img src="src/assets/logo.png" alt="Familybusiness Logo" className="logo" />
                    </div>

                    <ul className="navbar-links">
                        <li className={location.pathname === "/" ? "active" : ""}>
                            <Link to="/inicio">Inicio</Link>
                        </li>
                        <li className={location.pathname === "/caracteristicas" ? "active" : ""}>
                            <Link to="/caracteristicas">Características</Link>
                        </li>
                        <li className={location.pathname === "/cta" ? "active" : ""}>
                            <Link to="/cta">CTA</Link>
                        </li>
                    </ul>
                </nav>

                <Outlet />

                <footer>
                    <p>© COPYRIGHT 2025 TODOS LOS DERECHOS RESERVADOS.</p>
                </footer>
            </>
            )
}
