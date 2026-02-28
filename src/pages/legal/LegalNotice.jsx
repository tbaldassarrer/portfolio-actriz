import React, { useEffect } from "react";
import "./LegalPages.css";

const LegalNotice = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="legal-page">
      <header className="legal-hero">
        <div className="legal-hero__content">
          <h1 className="legal-title">Aviso Legal</h1>
          <p className="legal-subtitle">
            Información legal del titular del sitio web y condiciones generales de uso.
          </p>
          <p className="legal-updated">Última actualización: 26 de febrero de 2026</p>
        </div>
      </header>

      <section className="legal-container">
        <article className="legal-card">
          <p>
            En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información
            y de Comercio Electrónico, se informa que la titularidad de este sitio web corresponde a{" "}
            <strong>Guaxara Baldassarre Rodríguez</strong>, con <strong>DNI 78519427A</strong>; dirección{" "}
            <strong>c/ El Morrete, 41 B, 35017, Las Palmas de Gran Canaria</strong>; y correo electrónico de contacto{" "}
            <a className="legal-link" href="mailto:g@gbaldassarre.com">
              g@gbaldassarre.com
            </a>
            .
          </p>

          <p>
            La actividad de este sitio web tiene como finalidad la difusión de proyectos de <strong>Artes Vivas</strong>{" "}
            y contenidos de carácter artístico.
          </p>

          <p>
            Todos los derechos de propiedad intelectual sobre los textos, imágenes, vídeos y demás contenidos presentes
            en esta plataforma pertenecen a su autora (salvo que se indique lo contrario), quedando prohibida su
            reproducción o distribución sin autorización expresa.
          </p>

          <p>
            La titular no se hace responsable del uso indebido de los contenidos ni de los errores técnicos ajenos
            a su control que puedan dificultar la navegación.
          </p>

          <div className="legal-note">
            <p>
              Para consultas:{" "}
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

export default LegalNotice;