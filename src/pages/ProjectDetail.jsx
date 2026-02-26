import { Link, useParams } from "react-router-dom";

export default function ProjectDetail() {
  const { slug } = useParams();

  return (
    <main className="container pageSection">
      <Link className="backLink" to="/projects">← Volver a proyectos</Link>

      <h2 className="h2" style={{ marginTop: "18px" }}>
        {slug.replaceAll("-", " ")}
      </h2>

      <p className="p muted" style={{ maxWidth: "70ch" }}>
        Aquí irá la descripción del proyecto, galería de fotos y vídeo si aplica.
      </p>

      <div className="detailGallery">
        <div className="detailImg" />
        <div className="detailImg" />
        <div className="detailImg" />
      </div>

      <div className="videoBox">
        <div className="videoPlaceholder">Vídeo (opcional)</div>
      </div>
    </main>
  );
}