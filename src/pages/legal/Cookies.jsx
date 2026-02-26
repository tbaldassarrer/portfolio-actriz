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
            Información sobre el uso de cookies en este sitio web y cómo puedes gestionarlas.
          </p>
          <p className="legal-updated">Última actualización: 26 de febrero de 2026</p>
        </div>
      </header>

      <section className="legal-container">
        <article className="legal-card">
          <h2>1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos que se descargan en tu dispositivo al acceder a un sitio web.
            Permiten, entre otras cosas, almacenar y recuperar información sobre tus hábitos de navegación
            o de tu equipo, y pueden utilizarse para reconocerte.
          </p>

          <h2>2. Tipos de cookies que se pueden usar</h2>
          <ul className="legal-list">
            <li>
              <strong>Cookies técnicas:</strong> necesarias para el funcionamiento básico del sitio.
            </li>
            <li>
              <strong>Cookies de personalización:</strong> recuerdan preferencias (idioma, configuración).
            </li>
            <li>
              <strong>Cookies de análisis:</strong> ayudan a entender cómo se usa la web para mejorarla.
            </li>
            <li>
              <strong>Cookies de terceros:</strong> instaladas por servicios externos (por ejemplo, redes sociales).
            </li>
          </ul>

          <h2>3. ¿Cómo gestionar o desactivar cookies?</h2>
          <p>
            Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración
            de tu navegador. Ten en cuenta que, si desactivas algunas cookies, es posible que ciertas funciones
            de la web no estén disponibles o no funcionen correctamente.
          </p>

          <h2>4. Cookies de terceros</h2>
          <p>
            Este sitio puede incluir enlaces o integraciones con servicios de terceros (por ejemplo, redes sociales).
            Esos servicios pueden usar sus propias cookies. Te recomendamos revisar sus políticas específicas.
          </p>

          <h2>5. Cambios en la política de cookies</h2>
          <p>
            Esta política puede actualizarse por cambios legales o técnicos. Te recomendamos revisarla periódicamente.
          </p>

          <div className="legal-note">
            <p>
              Si tienes dudas sobre esta política, puedes escribirnos a{" "}
              <a className="legal-link" href="mailto:info@gbaldassarre.es">info@gbaldassarre.es</a>.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Cookies;