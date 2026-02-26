import { NavLink } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footerInner">
        <div className="footerCol">
          <div className="footerBrand">GBaldassarre</div>
          <div className="footerTag">ARTES VIVAS</div>

          <div className="footerSmall">
            Portfolio visual de proyectos. Disponible para colaboraciones y nuevos
            trabajos.
          </div>
        </div>

        <div className="footerCol">
          <div className="footerTitle">Contacto</div>

          <a className="footerLink" href="mailto:contacto@ejemplo.com">
            contacto@ejemplo.com
          </a>

          <a
            className="footerLink"
            href="https://instagram.com/usuario"
            target="_blank"
            rel="noreferrer"
          >
            Instagram · @usuario
          </a>

          <a
            className="footerLink"
            href="https://wa.me/34600000000"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp · +34 600 000 000
          </a>

          <a className="footerLink" href="tel:+34600000000">
            Tel · +34 600 000 000
          </a>
        </div>

        <div className="footerCol">
          <div className="footerTitle">Legal</div>

          <NavLink className="footerLink" to="/privacidad">
            Política de privacidad
          </NavLink>

          <NavLink className="footerLink" to="/cookies">
            Política de cookies
          </NavLink>

          <NavLink className="footerLink" to="/aviso-legal">
            Aviso legal
          </NavLink>

          <NavLink className="footerLink" to="/condiciones">
            Condiciones de uso
          </NavLink>
        </div>
      </div>

      <div className="footerBottom">
        <div className="container footerBottomInner">
          <span>© {year} GBaldassarre</span>
          <span className="footerDot">·</span>
          <span>Todos los derechos reservados</span>
        </div>
      </div>
    </footer>
  );
}