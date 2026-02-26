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
            Información sobre cómo se tratan tus datos personales en este sitio web.
          </p>
          <p className="legal-updated">Última actualización: 26 de febrero de 2026</p>
        </div>
      </header>

      <section className="legal-container">
        <article className="legal-card">
          <h2>1. Responsable del tratamiento</h2>
          <ul className="legal-list">
            <li><strong>Responsable:</strong> GBaldassarre</li>
            <li>
              <strong>Contacto:</strong>{" "}
              <a className="legal-link" href="mailto:info@gbaldassarre.es">info@gbaldassarre.es</a>
            </li>
          </ul>

          <h2>2. Datos que se pueden recopilar</h2>
          <p>
            En función del uso que hagas del sitio, se pueden recopilar datos como nombre, correo electrónico
            y el contenido que envíes a través de formularios o vías de contacto.
          </p>

          <h2>3. Finalidad del tratamiento</h2>
          <ul className="legal-list">
            <li>Responder a consultas y solicitudes enviadas por el usuario.</li>
            <li>Gestionar comunicaciones relacionadas con servicios profesionales.</li>
            <li>Mejorar el sitio web y su seguridad.</li>
          </ul>

          <h2>4. Base legal</h2>
          <p>
            El tratamiento se basa en el consentimiento del usuario al enviar formularios/consultas y, cuando
            aplique, en la ejecución de medidas precontractuales o contractuales.
          </p>

          <h2>5. Conservación de los datos</h2>
          <p>
            Los datos se conservarán durante el tiempo necesario para atender la solicitud y, posteriormente,
            durante los plazos legalmente exigidos si fueran aplicables.
          </p>

          <h2>6. Cesión de datos a terceros</h2>
          <p>
            No se cederán datos a terceros salvo obligación legal o cuando sea necesario para prestar un servicio
            (por ejemplo, proveedores técnicos), aplicando las garantías correspondientes.
          </p>

          <h2>7. Derechos del usuario</h2>
          <p>
            Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad
            enviando una solicitud a{" "}
            <a className="legal-link" href="mailto:info@gbaldassarre.es">info@gbaldassarre.es</a>.
          </p>

          <h2>8. Medidas de seguridad</h2>
          <p>
            Se aplican medidas técnicas y organizativas razonables para proteger los datos personales y evitar
            accesos no autorizados, pérdida o alteración.
          </p>

          <div className="legal-note">
            <p>
              Si consideras que tus derechos no han sido atendidos, puedes presentar una reclamación ante la
              autoridad de control competente.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Privacy;