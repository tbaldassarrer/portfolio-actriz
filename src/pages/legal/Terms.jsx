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
            Normas que regulan el acceso y uso de este sitio web.
          </p>
          <p className="legal-updated">Última actualización: 26 de febrero de 2026</p>
        </div>
      </header>

      <section className="legal-container">
        <article className="legal-card">

          <p>
            El acceso y navegación por este sitio web atribuye la condición de usuario e implica
            la aceptación de las presentes condiciones.
          </p>

          <p>
            El usuario se compromete a hacer un uso adecuado de los contenidos y servicios,
            absteniéndose de utilizarlos para actividades ilícitas o contrarias a la buena fe.
          </p>

          <p>
            Todos los contenidos de este sitio (textos, imágenes, vídeos, diseño y código)
            están protegidos por derechos de propiedad intelectual y pertenecen a su autora,
            salvo que se indique lo contrario.
          </p>

          <p>
            La titular se reserva el derecho de modificar en cualquier momento el contenido
            del sitio web sin previo aviso.
          </p>

          <div className="legal-note">
            <p>
              Para cualquier cuestión relacionada con estas condiciones, puedes contactar en{" "}
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

export default Terms;