import { CheckIcon, PlayIcon } from "./Icons";

export function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="pill">
            <span className="dot" /> Watch before you decide what to do
          </span>
          <h1>
            Living with a hernia is a choice you are making{" "}
            <em>every single day.</em>
          </h1>
          <p className="sub">
            The bulge, the heaviness, the pull when you lift or cough - most
            people wait months hoping it fades. It does not. A short, honest
            assessment tells you exactly what you are dealing with and what
            your real options are.
          </p>
          <div className="hero-cta">
            <a href="#book" className="btn">
              Book my consultation <span className="sub">Rs.800</span>
            </a>
            <a href="#check" className="btn btn-ghost">
              Check my symptoms
            </a>
          </div>
          <div className="trust-inline">
            <span>
              <CheckIcon color="#42c8c8" size={17} /> Minimally invasive
              approach
            </span>
            <span>
              <CheckIcon color="#42c8c8" size={17} /> Reports reviewed
              personally
            </span>
          </div>
        </div>

        <div className="vsl">
          <div className="vsl-bg" />
          <span className="vsl-tag">Play Watch first</span>
          <div className="vsl-inner">
            <div className="play" role="button" aria-label="Play video">
              <PlayIcon size={26} />
            </div>
            <div className="vsl-label">What to do about your hernia</div>
            <div className="vsl-cap">
              [ Embed your VSL here - replace this placeholder block ]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
