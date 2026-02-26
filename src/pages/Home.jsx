import HeroTriptych from "../components/HeroTriptych";

export default function Home() {
  return (
   <main className="homePage">
  <div className="container">
    <div className="homeTitleSection">
      <h1 className="homeTitle">GBaldassarre</h1>
      <div className="homeSubtitle">ARTES VIVAS</div>
    </div>
  </div>

  <HeroTriptych />
</main>
  );
}