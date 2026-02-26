export default function HeroTriptych() {
  return (
    <section className="heroTriptych">
      <div className="heroTile">
        <img className="heroMedia" src="/img/hero-left.jpg" alt="Imagen hero" />
      </div>

      <div className="heroTile">
        <video
          className="heroMedia"
          src="/video/hero-loop.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="heroTile">
        <img className="heroMedia" src="/img/hero-left.jpg" alt="Imagen hero" />
      </div>
    </section>
  );
}