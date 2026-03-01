import { useEffect, useRef, useState } from "react";

export default function FullscreenCarousel({
  images = [],
  interval = 4500,
  fadeMs = 900,
}) {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);
  const count = images.length;

  const stop = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const start = () => {
    stop();
    if (count <= 1) return;
    timerRef.current = setInterval(() => {
      setIdx((p) => (p + 1) % count);
    }, interval);
  };

  const next = () => setIdx((p) => (p + 1) % count);
  const prev = () => setIdx((p) => (p - 1 + count) % count);

  // reinicia al cambiar proyecto / número de imágenes
  useEffect(() => {
    setIdx(0);
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, interval]);

  if (!images || count === 0) return null;

  return (
    <section className="fsCarousel" aria-label="Carrusel de imágenes">
      <div className="fsFade" style={{ ["--fade-ms"]: `${fadeMs}ms` }}>
  {images.map((img, i) => (
    <div
      key={`${img.src}-${i}`}
      className={`fsFadeSlide ${i === idx ? "isActive" : ""}`}
    >
      <img
        className="fsFadeImg"
        src={img.src}
        alt={img.alt || ""}
        draggable="false"
      />

      {img.caption && (
        <div className="fsImageCaption">
          {img.caption}
        </div>
      )}
    </div>
  ))}
</div>

      {count > 1 && (
        <>
          <button
            type="button"
            className="fsCarouselBtn fsCarouselBtnLeft"
            aria-label="Anterior"
            onClick={() => {
              stop();
              prev();
              start();
            }}
          >
            ‹
          </button>

          <button
            type="button"
            className="fsCarouselBtn fsCarouselBtnRight"
            aria-label="Siguiente"
            onClick={() => {
              stop();
              next();
              start();
            }}
          >
            ›
          </button>
        </>
      )}
    </section>
  );
}