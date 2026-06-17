import { CheckIcon } from "./Icons";
import { Reveal } from "./Reveal";

const signs = [
  "Mommy pouch",
  "Weak core muscles",
  "Lower back pain",
  "Difficulty exercising",
  "Abdominal bulging",
  "Lost post-pregnancy confidence",
];

export function WomenSection() {
  return (
    <section className="sec" id="women">
      <div className="wrap">
        <Reveal className="women-grid">
          <div className="women-visual">
            <div className="ph">
              <span className="ic">W</span>
              [ Add a warm, reassuring patient
              <br />
              or illustration image here ]
            </div>
          </div>
          <div>
            <span className="badge-soft">For Women</span>
            <h2 className="section-title">It may not just be belly fat.</h2>
            <p className="lead section-copy">
              Many women come to us convinced they have stubborn fat that will
              not budge after pregnancy. What they often have is{" "}
              <b>abdominal muscle separation - Diastasis Recti.</b> It affects
              confidence, posture and everyday comfort, and it rarely resolves
              with more crunches.
            </p>
            <div className="signs">
              {signs.map((sign) => (
                <div className="sgn" key={sign}>
                  <CheckIcon size={16} strokeWidth={2.6} /> {sign}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
