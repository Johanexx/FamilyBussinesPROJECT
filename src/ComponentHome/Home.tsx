import React, { useState, useEffect } from "react";
import "./Home.css";

// 🔹 Subcomponente: Tarjeta de beneficio
const BenefitCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => {
  return (
    <div className="benefit-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// 🔹 Subcomponente: Testimonio
const TestimonioCard = ({ texto, autor }: { texto: string; autor: string }) => {
  return (
    <div className="testimonio-card">
      <p>“{texto}”</p>
      <h4>— {autor}</h4>
    </div>
  );
};

// 🔹 Componente principal Home
const Home: React.FC = () => {
  // Estado para controlar si la página ya se cargó (para animaciones)
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simula carga inicial
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`home-page ${loaded ? "loaded" : ""}`}>
      {/* 1️⃣ Hero Section */}
      <header className="hero-section">
        <div className="hero-text">
          <h1>FamilyBusiness</h1>
          <h2>Organiza tus finanzas familiares de forma fácil y segura 💰</h2>
          <p>
            FamilyBusiness ayuda a personas entre 36 y 45 años a tomar el control de sus ingresos y gastos, logrando una
            economía familiar más organizada y libre de deudas.
          </p>
          <button className="btn-primary">Comienza gratis</button>
        </div>
        <img className="hero-image" src="src/assets/familia.jpg" alt="Familia feliz" />
      </header>

      {/* 2️⃣ Beneficios */}
      <section className="benefits-section">
        <h2>¿Por qué elegir FamilyBusiness?</h2>
        <div className="benefits-grid">
          <BenefitCard
            icon="📊"
            title="Control total de tus finanzas"
            description="Registra ingresos y gastos, visualiza tus movimientos y evita errores financieros."
          />
          <BenefitCard
            icon="📱"
            title="Interfaz simple e intuitiva"
            description="Una app diseñada para cualquier persona, sin necesidad de conocimientos contables."
          />
          <BenefitCard
            icon="💡"
            title="Recomendaciones inteligentes"
            description="Recibe sugerencias personalizadas para ahorrar y optimizar tus gastos."
          />
        </div>
      </section>

      {/* 3️⃣ Testimonios */}
      <section className="testimonios">
        <h2>Lo que dicen nuestros usuarios</h2>
        <div className="testimonios-grid">
          <TestimonioCard
            texto="Desde que uso FamilyBusiness, sé exactamente en qué se va mi dinero. ¡Ha cambiado la forma en que administramos nuestras finanzas!"
            autor="Laura y Daniel"
          />
          <TestimonioCard
            texto="Ahora ahorramos cada mes sin esfuerzo. La app nos da claridad y motivación para cumplir metas."
            autor="Andrea Gómez"
          />
        </div>
      </section>

      {/* 4️⃣ CTA Final */}
      <section className="cta-final">
        <h2>Comienza tu viaje hacia una vida financiera más estable</h2>
        <p>Regístrate hoy y descubre lo fácil que es administrar tu dinero.</p>
        <button className="btn-secundario">Crear cuenta ahora</button>
      </section>

      {/* 5️⃣ Footer */}
      <footer className="home-footer">
        <p>© COPYRIGHT 2025 TODOS LOS DERECHOS RESERVADOS.</p>
      </footer>
    </section>
  );
};

export default Home;
