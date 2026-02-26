export default function HeroTriptych() {
  const base = import.meta.env.BASE_URL;

  return (
    <section className="heroTriptych">
      <div className="heroTile">
        <img
          className="heroMedia"
          src={`${base}img/hero-left.jpg`}
          alt="Imagen hero"
        />
      </div>

      <div className="heroTile">
        <video
          className="heroMedia"
          src={`${base}video/hero-loop.mp4`}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="heroTile">
        <img
          className="heroMedia"
          src={`${base}img/hero-left.jpg`}
          alt="Imagen hero"
        />
      </div>
    </section>
  );
}