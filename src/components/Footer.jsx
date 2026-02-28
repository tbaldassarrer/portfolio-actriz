import { NavLink } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className= "footerInner">
        <div className="footerCol">
          <div className="footerBrand">Gbaldassarre</div>
          <div className="footerTag">ARTES VIVAS</div>

          <div className="footerSmall">
           
          </div>
        </div>

        <div className="footerCol">
          <div className="footerTitle">Contacto</div>

          <a className="footerLink" href="mailto:g@gbaldassarre.com">
            g@gbaldassarre.com
          </a>

          <a className="footerLink" href="tel:+34650511029">
            Tel · +34 650 511 029
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
        <div className="footerBottomInner">
          <span>© {year} Gbaldassarre</span>
          <span className="footerDot">·</span>
          <span>Todos los derechos reservados</span>
        </div>
      </div>
    </footer>
  );
}