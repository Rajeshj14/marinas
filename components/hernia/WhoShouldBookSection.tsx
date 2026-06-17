import { Reveal } from "./Reveal";

const cards = [
  ["+", "You have hernia symptoms", "A bulge, heaviness, or pain you have been brushing off."],
  ["Rx", "You were advised surgery", "And you want to truly understand it before deciding."],
  ["W", "You have diastasis recti signs", "Especially women after pregnancy with a bulge that stayed."],
  ["2nd", "You want a second opinion", "A fresh, specialist perspective on what you have been told."],
  ["?", "You want clarity first", "Answers before any treatment decision - no pressure."],
  ["Now", "You have been waiting too long", "Ready to stop hoping it will fade and actually find out."],
];

export function WhoShouldBookSection() {
  return (
    <section className="sec" id="who">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">Who should book this</span>
          <h2 className="section-title">This consultation is for you if...</h2>
          <div className="who-grid">
            {cards.map(([icon, title, copy]) => (
              <div className="who-c" key={title}>
                <div className="ic">{icon}</div>
                <b>{title}</b>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
