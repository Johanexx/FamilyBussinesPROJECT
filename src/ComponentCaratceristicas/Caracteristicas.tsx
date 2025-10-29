import "./Caracteristicas.css";

export default function Caracteristicas() {
  return (
    <section className="caracteristicas-page">
      {/* 🌟 Hero / Encabezado */}
      <header className="hero">
        <h1>Impulsa tu negocio familiar con Family Business Project</h1>
        <p>Conoce nuestras funciones diseñadas para hacer crecer tu empresa 🚀</p>
      </header>

      {/* 💡 Características principales */}
      <div className="caracteristicas-grid">
        <div className="caracteristica-card">
          <div className="icon">⚙️</div>
          <h2>Automatización Inteligente</h2>
          <p>Reduce tareas repetitivas con flujos de trabajo automáticos y eficientes.</p>
        </div>
        <div className="caracteristica-card">
          <div className="icon">📈</div>
          <h2>Analíticas en Tiempo Real</h2>
          <p>Obtén reportes precisos para tomar decisiones más inteligentes.</p>
        </div>
        <div className="caracteristica-card">
          <div className="icon">💬</div>
          <h2>Comunicación Eficiente</h2>
          <p>Conecta a tu equipo y mantén toda la información en un solo lugar.</p>
        </div>
        <div className="caracteristica-card">
          <div className="icon">🛡️</div>
          <h2>Seguridad de Datos</h2>
          <p>Protege tu información con encriptación avanzada y copias de respaldo.</p>
        </div>
      </div>

      {/* 📊 Sección de beneficios con imagen */}
      <div className="beneficios-section">
        <img
          src="https://odoocdn.com/openerp_website/static/src/img/apps/expenses/hero_image.webp"
          alt="Gestión visual"
          className="beneficios-img"
        />
        <div className="beneficios-texto">
          <h2>Todo bajo control, en una sola plataforma</h2>
          <p>
            Administra tus finanzas, empleados, inventario y clientes con una sola
            herramienta centralizada. Simplifica tus operaciones y enfócate en lo que
            realmente importa: hacer crecer tu empresa.
          </p>
          <button className="btn-primary">Descubre más</button>
        </div>
      </div>

      {/* 🧮 Sección de métricas */}
      <div className="metricas">
        <div className="metrica-item">
          <h3>+5K</h3>
          <p>Usuarios felices</p>
        </div>
        <div className="metrica-item">
          <h3>98%</h3>
          <p>Satisfacción de clientes</p>
        </div>
        <div className="metrica-item">
          <h3>+300</h3>
          <p>Negocios impulsados</p>
        </div>
      </div>

      {/* 🚀 Llamado a la acción */}
      <div className="cta">
        <h2>¿Listo para comenzar?</h2>
        <p>Únete a cientos de emprendedores que ya están transformando sus negocios familiares.</p>
        <button className="btn-secundario">Empezar ahora</button>
      </div>
    </section>
  );
}
