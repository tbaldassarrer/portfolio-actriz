import { Link } from "react-router-dom";

const items = [
  { slug: "proyecto-uno", title: "Cubo de sal sobre mi cabeza", img: "img1.jpg" },
  { slug: "proyecto-dos", title: "It´s your birthday (333)", img: "img2.jpg" },
  { slug: "proyecto-tres", title: "Los Pandemia", img: "img3.jpg" },
  { slug: "proyecto-cuatro", title: "XX (otra versión)", img: "img4.jpg" },
];

export default function Projects() {
  const base = import.meta.env.BASE_URL;

  // Orden exacto:
  // Columna izquierda: A (Cubo) + C (Los Pandemia)
  // Columna derecha:  B (It's your birthday) + D (XX)
  const A = items[0];
  const B = items[1];
  const C = items[2];
  const D = items[3];

  return (
    <main className="container pageSection projectsPage">
      <div className="projectsHead">
  <h2 className="projectsTitle">
    Proyectos{" "}
    <span className="projectsSubtitleInline">
      <span className="projectsBar">|</span> Selección de trabajos
    </span>
  </h2>
</div>

      {/* Masonry real: 2 columnas que apilan independiente */}
      <section className="projectsMasonry">
        {/* IZQUIERDA */}
        <div className="projectsCol">
          <Link to={`/projects/${A.slug}`} className="projectItem areaA">
            <img
              className="projectImg small"
              src={`${base}img/${A.img}`}
              alt={A.title}
              loading="lazy"
            />
            <div className="projectCaption">{A.title}</div>
          </Link>

          <Link to={`/projects/${C.slug}`} className="projectItem areaC">
            <img
              className="projectImg tall"
              src={`${base}img/${C.img}`}
              alt={C.title}
              loading="lazy"
            />
            <div className="projectCaption">{C.title}</div>
          </Link>
        </div>

        {/* DERECHA */}
        <div className="projectsCol">
          <Link to={`/projects/${B.slug}`} className="projectItem areaB">
            <img
              className="projectImg tall"
              src={`${base}img/${B.img}`}
              alt={B.title}
              loading="lazy"
            />
            <div className="projectCaption">{B.title}</div>
          </Link>

          <Link to={`/projects/${D.slug}`} className="projectItem areaD">
            <img
              className="projectImg small"
              src={`${base}img/${D.img}`}
              alt={D.title}
              loading="lazy"
            />
            <div className="projectCaption">{D.title}</div>
          </Link>
        </div>
      </section>
    </main>
  );
}