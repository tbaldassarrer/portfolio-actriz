import { Link, useParams } from "react-router-dom";
import FullscreenCarousel from "../components/FullscreenCarousel";

const PROJECTS = {
  "proyecto-uno": {
    title: "",
    intro: (
      <>
        <strong>CUBO DE SAL SOBRE MI CABEZA</strong> sitúa el cuerpo en un cruce
        de violencia, sexualidad y locura. Es un cuerpo sumergido en un campo
        político donde las relaciones de poder “lo cercan, lo marcan, lo doman,
        lo someten a suplicio, lo fuerzan a unos trabajos, lo obligan a unas
        ceremonias, exigen de él unos signos” (Foucault).
      </>
    ),
    note:
      "Proyecto seleccionado en la Convocatoria «Ayudas al Sector de las Artes Visuales» del Ayuntamiento de LPGC y la Sociedad de Promoción de la Ciudad, a través del programa «Cultura en Acción».",
    video: {
      src: "video/cubo-sal.mp4",
      caption: "Vídeo: Arima León",
      poster: "",
    },
  },

  "proyecto-dos": {
    title: "",
    intro: (
      <>
        <strong>IT’S YOUR BIRTHDAY (333)</strong> es un poema visual en movimiento
        que se construye a través de la acción. En él, la imagen se transforma
        hasta devenir instalación, un espacio donde el cuerpo y la memoria quedan
        sometidos a la violencia más extrema.
      </>
    ),
    note:
      "Con el apoyo del Ayuntamiento de Las Palmas de Gran Canaria (I Encuentro de Arte Actual – La Ciudad Tomada).",
    gallery: [
      { src: "img/img2.jpg", alt: "Imagen 1" },
      { src: "img/img6.jpg", alt: "Imagen 2" },
      { src: "img/img7.jpg", alt: "Imagen 3" },
    ],
    credit: "Fotos: Helena Madox",
  },

"proyecto-tres": {
  title: "",
  intro: (
    <>
      <strong>LOS PANDEMIA</strong> constituye un proceso de investigación visual
      donde la identidad se construye a través de la mediación del objeto
      cotidiano...
    </>
  ),
  gallery: [
    { src: "img/hero-left.jpg", alt: "Los Pandemia 1", caption: "Franco no ha muerto" },
    { src: "img/img9.jpg", alt: "Los Pandemia 2", caption: "Don't touch your face" },
    { src: "img/img10.jpg", alt: "Los Pandemia 3", caption: "Sombra analógica" },
    { src: "img/img11.jpg", alt: "Los Pandemia 4", caption: "It matters" },
    { src: "img/img3.jpg", alt: "Los Pandemia 5", caption: "Political Cabaret" },
    { src: "img/img13.jpg", alt: "Los Pandemia 6", caption: "Torso de hilo sobre mi cabeza" },
    { src: "img/img14.jpg", alt: "Los Pandemia 7", caption: "Contemporary mask" },
    { src: "img/img15.jpg", alt: "Los Pandemia 8", caption: "Welcome to nowhere" },
    { src: "img/img16.jpg", alt: "Los Pandemia 9", caption: "Thr-d-ead" },
  ],
},

  "proyecto-cuatro": {
    title: "",
    intro: (
      <>
        <strong>XX (OTRA VERSIÓN)</strong> es una pieza que investiga los
        mecanismos de control que operan sobre el sujeto. La identidad es tratada
        como una pulsión domesticada por el miedo; una vez neutralizada, el cuerpo
        emerge como un mapa de impactos, convirtiéndose en el blanco absoluto de
        una violencia latente.
      </>
    ),
    galleryType: "xxRow",
    gallery: [
      { src: "img/img17.jpg", alt: "XX 1" },
      { src: "img/img18.jpg", alt: "XX 2" },
      { src: "img/img19.jpg", alt: "XX 3" },
    ],
    credit: "Fotos: Alejandro R.",
  },
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const base = import.meta.env.BASE_URL;

  const project = PROJECTS[slug];

  const title = project?.title ?? slug.replaceAll("-", " ");
  const intro = project?.intro ?? (
    <span className="muted">Contenido próximamente.</span>
  );

  // ✅ Prepara imágenes para el carrusel (solo si hay gallery)
const carouselImages =
  project?.gallery?.length > 0
    ? project.gallery.map((img, i) => ({
        src: `${base}${img.src}`,
        alt: img.alt ?? `Imagen ${i + 1}`,
        caption: img.caption, // ✅ AQUI
      }))
    : [];

  return (
    <main className="container pageSection">
      <Link className="backLink" to="/projects">
        ← Volver a proyectos
      </Link>

      <article className="projectDetail">
        {/* ✅ VIDEO (si existe) */}
        {project?.video?.src && (
          <figure className="projectMedia">
            <div className="mediaFrame">
              <video
                className="mediaVideo"
                controls
                playsInline
                preload="metadata"
                poster={
                  project.video.poster ? `${base}${project.video.poster}` : undefined
                }
              >
                <source src={`${base}${project.video.src}`} type="video/mp4" />
                Tu navegador no soporta vídeo HTML5.
              </video>
            </div>

            {project.video.caption && (
              <figcaption className="mediaCaption">{project.video.caption}</figcaption>
            )}
          </figure>
        )}

        {/* ✅ CARRUSEL FULLSCREEN (reemplaza el grid) */}
        {carouselImages.length > 0 && (
          <>
            <FullscreenCarousel images={carouselImages} interval={4500} />
            {project?.credit && (
              <div className="galleryCaption" style={{ marginTop: "6px" }}>
                {project.credit}
              </div>
            )}
          </>
        )}

        {/* ✅ TEXTO ABAJO */}
        <header className="projectHeader">
          <h1 className="projectTitle">{title}</h1>
          <p className="projectIntro">{intro}</p>
          {project?.note && <p className="projectNote">{project.note}</p>}
        </header>
      </article>
    </main>
  );
}