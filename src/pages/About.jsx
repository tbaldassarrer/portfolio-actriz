export default function About() {
  const base = import.meta.env.BASE_URL;

  return (
    <main className="container pageSection aboutPage">
      <section className="aboutSplit">
        {/* Texto */}
        <div className="aboutText">

  <div className="aboutName">
    Gbaldassarre
  </div>

  <p className="aboutBio">
    Creadora escénica. Su práctica artística investiga los cruces entre la biografía personal, 
    la memoria histórica y la cultura electrónica. Articula su trabajo desde el lenguaje de la performance 
    y las artes vivas, donde el cuerpo opera como un archivo vivo de las tensiones políticas y sociales.
  </p>

</div>

        {/* Imagen */}
        <figure className="aboutFigure">
          <img
            className="aboutImg"
            src={`${base}img/about.jpg`}   
            alt="Imagen About"
            loading="lazy"
          />
          <figcaption className="aboutCredit">Foto: Cristina Alba</figcaption>
        </figure>
      </section>
    </main>
  );
}