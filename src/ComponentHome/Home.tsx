import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <section className="home-page">
        {/*  1️⃣ Hero Section (Título + Subtítulo + Imagen) */}
        <header className="hero-section">
          <div className="hero-text">
            <h1>FamilyBusiness</h1>
            <h2>Organiza tus finanzas familiares de forma fácil y segura 💰</h2>
            <p>
              FamilyBusiness ayuda a personas entre 36 y 45 años a tomar el
              control de sus ingresos y gastos, logrando una economía familiar
              más organizada y libre de deudas.
            </p>
            <button className="btn-primary">Comienza gratis</button>
          </div>
          <img
            className="hero-image"
            src="src/assets/familia.jpg"
            alt="Familia feliz"
          />
        </header>

        {/*  2️⃣ Beneficios */}
        <section className="benefits-section">
          <h2>¿Por qué elegir FamilyBusiness?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="icon">📊</div>
              <h3>Control total de tus finanzas</h3>
              <p>
                Registra ingresos y gastos, visualiza tus movimientos y evita
                errores financieros.
              </p>
            </div>
            <div className="benefit-card">
              <div className="icon">📱</div>
              <h3>Interfaz simple e intuitiva</h3>
              <p>
                Una app diseñada para cualquier persona, sin necesidad de
                conocimientos contables.
              </p>
            </div>
            <div className="benefit-card">
              <div className="icon">💡</div>
              <h3>Recomendaciones inteligentes</h3>
              <p>
                Recibe sugerencias personalizadas para ahorrar y optimizar tus
                gastos.
              </p>
            </div>
          </div>
        </section>

        {/*  3️⃣ Testimonios (Pruebas sociales) */}
        <section className="testimonios">
          <h2>Lo que dicen nuestros usuarios</h2>
          <div className="testimonios-grid">
            <div className="testimonio-card">
              <p>
                “Desde que uso FamilyBusiness, sé exactamente en qué se va mi
                dinero. ¡Ha cambiado la forma en que administramos nuestras
                finanzas!”
              </p>
              <h4>— Laura y Daniel</h4>
            </div>
            <div className="testimonio-card">
              <p>
                “Ahora ahorramos cada mes sin esfuerzo. La app nos da claridad y
                motivación para cumplir metas.”
              </p>
              <h4>— Andrea Gómez</h4>
            </div>
          </div>
        </section>

        {/*  4️⃣ CTA Final */}
        <section className="cta-final">
          <h2>Comienza tu viaje hacia una vida financiera más estable</h2>
          <p>Regístrate hoy y descubre lo fácil que es administrar tu dinero.</p>
          <button className="btn-secundario">Crear cuenta ahora</button>
        </section>

        {/*  5️⃣ Footer */}
        <footer className="home-footer">
          <p>© COPYRIGHT 2025 TODOS LOS DERECHOS RESERVADOS.</p>
        </footer>
      </section>
    );
  }
}

export default Home;
