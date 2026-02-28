import React, { useEffect } from "react";
import "./LegalPages.css";

const Cookies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="legal-page">
      <header className="legal-hero">
        <div className="legal-hero__content">
          <h1 className="legal-title">Política de Cookies</h1>
          <p className="legal-subtitle">
            Información sobre el uso de cookies en este sitio web.
          </p>
          <p className="legal-updated">Última actualización: 26 de febrero de 2026</p>
        </div>
      </header>

      <section className="legal-container">
        <article className="legal-card">

          <p>
            Este sitio web puede utilizar cookies técnicas necesarias para el correcto funcionamiento
            de la plataforma.
          </p>

          <p>
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando
            visitas un sitio web. Permiten recordar información sobre tu navegación para mejorar
            la experiencia del usuario.
          </p>

          <p>
            Actualmente, este sitio no utiliza cookies con fines publicitarios ni de análisis
            de terceros.
          </p>

          <p>
            En cualquier caso, puedes configurar tu navegador para bloquear o eliminar las cookies
            instaladas en tu equipo.
          </p>

          <div className="legal-note">
            <p>
              Para cualquier consulta relacionada con esta política, puedes escribir a{" "}
              <a className="legal-link" href="mailto:g@gbaldassarre.com">
                g@gbaldassarre.com
              </a>.
            </p>
          </div>

        </article>
      </section>
    </main>
  );
};

export default Cookies;