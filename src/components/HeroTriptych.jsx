export default function HeroTriptych() {
  const base = import.meta.env.BASE_URL;

  return (
    <section className="heroTriptych">
      <div className="heroTile">
        <img
          className="heroMedia"
          src={`${base}img/hero-left.jpg`}
          alt="Imagen hero"
          data-aos="zoom-in"
          data-aos-duration="1400"
          data-aos-easing="ease-out-cubic"
          data-aos-once="true"
          data-aos-offset="0"
        />
      </div>
    </section>
  );
}