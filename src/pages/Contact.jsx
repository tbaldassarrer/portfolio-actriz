export default function Contact() {
  return (
    <main className="container pageSection">
      <h2 className="h2">Contacto</h2>
       

      <div className="contactLayout">
        <div className="contactInfo">
          <div className="infoItem">
            <h4>Gbaldassarre</h4>
            <span className="infoLabel">Email</span>
            <a href="mailto:g@gbaldassarre.com" className="infoLink">
              g@gbaldassarre.com
            </a>
          </div>

          <div className="infoItem">
            <span className="infoLabel">Teléfono</span>
            <a href="tel:+34650511029" className="infoLink">
              +34 650 511 029
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}