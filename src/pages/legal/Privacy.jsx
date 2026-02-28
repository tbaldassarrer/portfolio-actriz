import React, { useEffect } from "react";
import "./LegalPages.css";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="legal-page">
      <header className="legal-hero">
        <div className="legal-hero__content">
          <h1 className="legal-title">Política de Privacidad</h1>
          <p className="legal-subtitle">
            En cumplimiento del RGPD y la LOPDGDD, aquí encontrarás la información sobre el tratamiento de datos.
          </p>
          <p className="legal-updated">Última actualización: 26 de febrero de 2026</p>
        </div>
      </header>

      <section className="legal-container">
        <article className="legal-card">
          <p>
            En cumplimiento del Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018
            (LOPDGDD), se informa que la responsable del tratamiento de los datos personales es{" "}
            <strong>Guaxara Baldassarre Rodríguez</strong>.
          </p>

          <p>
            La recogida de estos datos tiene como única finalidad la gestión de consultas y comunicaciones
            profesionales, basándose en el consentimiento de la persona interesada al contactar.
          </p>

          <p>
            Los datos se conservarán durante el tiempo necesario para cumplir con la finalidad para la que
            se recabaron o mientras no se solicite su supresión.
          </p>

          <p>
            No se cederán datos a terceros, salvo obligación legal.
          </p>

          <p>
            El usuario puede ejercer sus derechos de acceso, rectificación, supresión o limitación dirigiendo
            una comunicación a{" "}
            <a className="legal-link" href="mailto:g@gbaldassarre.com">
              g@gbaldassarre.com
            </a>
            .
          </p>

          <div className="legal-note">
            <p>
              Si tienes cualquier duda relacionada con la privacidad, puedes contactar en{" "}
              <a className="legal-link" href="mailto:g@gbaldassarre.com">
                g@gbaldassarre.com
              </a>
              .
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Privacy;