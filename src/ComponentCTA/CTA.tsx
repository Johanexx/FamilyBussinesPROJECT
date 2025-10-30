import React from 'react'
import "./CTA.css";

export const CTA = () => {
  return (
    <div className="cta-container">
      {/*Lado izquierdo*/}
      <section className="left">
        <img src="src/assets/logo.png" alt="Familybusiness Logo" className="logo" />

        <h2 className="headline">
          Organiza tus ingresos y gastos <br /> de manera simple.
        </h2>

        <p className="subheadline">
          Empieza a ahorrar hoy mismo y alcanza tus metas familiares sin estrés.
        </p>

        <ul className="benefits">
          <li>✅ 100% gratis y fácil de usar</li>
          <li>💳 Controla tus finanzas familiares</li>
          <li>📈 Visualiza tus avances al instante</li>
          <li>🔒 Tus datos siempre seguros</li>
        </ul>

        <div className="button-container">
          <button>Crear mi cuenta gratis</button>
          <p className="click-text">↑</p>
          <p className="click-text">Click Aquí</p>
        </div>

      </section>
      {/*Lado derecho*/}
      <section className="right">
        <div className="banner">
          <img src="src/assets/dinero.png" alt="Imagen de dinero" className="banner-img" />
        </div>
      </section>
    </div>
  )
}
