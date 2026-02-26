import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 80) {
        setVisible(true);   // en el top → visible
      } else {
        setVisible(false);  // al bajar → oculto
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${visible ? "headerVisible" : "headerHidden"}`}>
      <div className="containerHeader headerInner">
        <div className="brand">
          <div className="brandBlock">
            <span className="brandName">GBaldassarre</span>
            <span className="brandSub">ARTES VIVAS</span>
          </div>
        </div>

        <nav className="nav">
          <NavLink to="/" className="navLink">Inicio</NavLink>
          <NavLink to="/projects" className="navLink">Proyectos</NavLink>
          <NavLink to="/about" className="navLink">Sobre mí</NavLink>
          <NavLink to="/contact" className="navLink">Contacto</NavLink>
        </nav>
      </div>
    </header>
  );
}