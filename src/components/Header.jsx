import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="container headerInner">
        <div className="brand">
          <div className="brandBlock">
            <span className="brandName">GBaldassarre</span>
            <span className="brandSub">ARTES VIVAS</span>
          </div>
        </div>

        <nav className="nav">
          <NavLink to="/" className="navLink">
    Inicio
  </NavLink>
          <NavLink to="/projects" className="navLink">
            Proyectos
          </NavLink>
          <NavLink to="/about" className="navLink">
            Sobre mí
          </NavLink>
          <NavLink to="/contact" className="navLink">
            Contacto
          </NavLink>
        </nav>
      </div>
    </header>
  );
}