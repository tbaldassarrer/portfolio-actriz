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
            Condiciones de uso y datos identificativos del titular del sitio.
          </p>
          <p className="legal-updated">Última actualización: 26 de febrero de 2026</p>
        </div>
      </header>

      <section className="legal-container">
        <article className="legal-card">
          <h2>1. Titular del sitio web</h2>
          <p>
            En cumplimiento con el deber de información, se facilitan a continuación los datos del titular del sitio web.
          </p>
          <ul className="legal-list">
            <li><strong>Titular:</strong> GBaldassarre</li>
            <li><strong>Contacto:</strong> <a className="legal-link" href="mailto:info@gbaldassarre.es">info@gbaldassarre.es</a></li>
            <li><strong>Ámbito:</strong> Sitio web profesional</li>
          </ul>

          <h2>2. Objeto</h2>
          <p>
            Este sitio web tiene como objetivo ofrecer información sobre la actividad profesional, servicios,
            contenidos y vías de contacto. El acceso y uso del sitio atribuye la condición de usuario e implica
            la aceptación de las presentes condiciones.
          </p>

          <h2>3. Propiedad intelectual e industrial</h2>
          <p>
            Todos los contenidos del sitio (textos, imágenes, diseño, logotipos, código, etc.) están protegidos
            por derechos de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución
            o modificación sin autorización expresa del titular.
          </p>

          <h2>4. Responsabilidad</h2>
          <p>
            El titular no se responsabiliza del mal uso que se realice de los contenidos del sitio, ni de los
            daños derivados del acceso o uso. Tampoco se garantiza la ausencia de virus u otros elementos que
            puedan causar alteraciones en sistemas informáticos del usuario.
          </p>

          <h2>5. Enlaces externos</h2>
          <p>
            Este sitio puede contener enlaces a páginas de terceros. El titular no se responsabiliza del contenido,
            políticas o prácticas de dichos sitios.
          </p>

          <h2>6. Legislación aplicable</h2>
          <p>
            La relación entre el usuario y el titular se regirá por la normativa vigente en España. Para cualquier
            controversia, las partes se someterán a los juzgados y tribunales que correspondan conforme a derecho.
          </p>

          <div className="legal-note">
            <p>
              Para consultas legales:{" "}
              <a className="legal-link" href="mailto:info@gbaldassarre.es">info@gbaldassarre.es</a>.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default LegalNotice;