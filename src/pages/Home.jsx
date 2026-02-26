import HeroTriptych from "../components/HeroTriptych";

export default function Home() {
  return (
    <main className="homePage">
      
      <section className="homeTitleSection container">
        <h1 className="homeTitle">GBaldassarre</h1>
        <p className="homeSubtitle">ARTES VIVAS</p>
      </section>

      <HeroTriptych />

    </main>
  );
}