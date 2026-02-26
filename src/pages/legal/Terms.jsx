import React, { useEffect } from "react";
import "./LegalPages.css";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="legal-page">
      <header className="legal-hero">
        <div className="legal-hero__content">
          <h1 className="legal-title">Condiciones de Uso</h1>
          <p className="legal-subtitle">
            Normas básicas de uso del sitio web y responsabilidades del usuario.
          </p>
          <p className="legal-updated">Última actualización: 26 de febrero de 2026</p>
        </div>
      </header>

      <section className="legal-container">
        <article className="legal-card">
          <h2>1. Aceptación de las condiciones</h2>
          <p>
            El acceso y navegación por este sitio implica la aceptación de estas condiciones de uso.
            Si no estás de acuerdo, por favor no utilices el sitio.
          </p>

          <h2>2. Uso correcto del sitio</h2>
          <ul className="legal-list">
            <li>No usar el sitio con fines ilícitos o perjudiciales.</li>
            <li>No intentar acceder a áreas restringidas o sistemas sin autorización.</li>
            <li>No introducir malware, scripts o acciones que afecten al funcionamiento del sitio.</li>
          </ul>

          <h2>3. Contenidos y disponibilidad</h2>
          <p>
            El titular podrá modificar, actualizar o retirar contenidos sin previo aviso. No se garantiza
            la disponibilidad ininterrumpida del sitio, aunque se intentará mantener un funcionamiento correcto.
          </p>

          <h2>4. Enlaces a terceros</h2>
          <p>
            El sitio puede incluir enlaces a páginas externas. El titular no se responsabiliza de sus contenidos
            ni de su funcionamiento.
          </p>

          <h2>5. Limitación de responsabilidad</h2>
          <p>
            El usuario es responsable del uso que haga del sitio. El titular no responde de daños derivados del uso,
            interrupciones del servicio o fallos técnicos ajenos.
          </p>

          <h2>6. Modificaciones</h2>
          <p>
            Estas condiciones pueden modificarse en cualquier momento. La versión vigente será la publicada en esta página.
          </p>

          <div className="legal-note">
            <p>
              Para cualquier cuestión relacionada con estas condiciones, escribe a{" "}
              <a className="legal-link" href="mailto:info@gbaldassarre.es">info@gbaldassarre.es</a>.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Terms;