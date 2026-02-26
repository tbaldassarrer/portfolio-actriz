import { Link } from "react-router-dom";

const demo = [
  { slug: "proyecto-uno", title: "Proyecto Uno", year: "2022" },
  { slug: "proyecto-dos", title: "Proyecto Dos", year: "2023" },
  { slug: "proyecto-tres", title: "Proyecto Tres", year: "2021" },
  { slug: "proyecto-cuatro", title: "Proyecto Cuatro", year: "2020" },
];

export default function Projects() {
  return (
    <main className="container pageSection">
      <div className="sectionHead">
        <h2 className="h2">Proyectos</h2>
        <p className="muted">Selección de trabajos.</p>
      </div>

      <div className="grid">
        {demo.map((p) => (
          <Link key={p.slug} to={`/projects/${p.slug}`} className="cardProject">
            <div className="thumb" />
            <div className="cardMeta">
              <div className="cardTitle">{p.title}</div>
              <div className="cardSub">{p.year}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}