import {
  BoltIcon,
  CircleCheckIcon,
  HeartIcon,
  PlusIcon,
  PulseIcon,
  ShieldIcon,
} from "./Icons";
import { Reveal } from "./Reveal";

const benefits = [
  {
    title: "Smaller incisions",
    copy: "Minimally invasive techniques mean far less to heal from afterward.",
    icon: <PlusIcon />,
  },
  {
    title: "Less discomfort",
    copy: "A gentler experience built around your comfort, not just the procedure.",
    icon: <HeartIcon />,
  },
  {
    title: "Faster recovery",
    copy: "An emphasis on getting you back to daily life sooner.",
    icon: <BoltIcon />,
  },
  {
    title: "Early return to activity",
    copy: "Less time spent sidelined from work, family and routine.",
    icon: <PulseIcon />,
  },
  {
    title: "Better cosmetic outcomes",
    copy: "Approaches that consider how things look and feel afterward.",
    icon: <CircleCheckIcon />,
  },
  {
    title: "Reduced recurrence risk",
    copy: "Treatment chosen with the goal of lasting results.",
    icon: <ShieldIcon />,
  },
];

export function BenefitsSection() {
  return (
    <section className="sec" id="benefits">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">Why patients choose modern treatment</span>
          <h2 className="section-title">
            Today&apos;s options are not what most people picture.
          </h2>
          <p className="lead section-copy">
            The first step is simply understanding which type of hernia you
            have. From there, modern approaches can offer:
          </p>
          <div className="ben-grid">
            {benefits.map((benefit) => (
              <div className="ben" key={benefit.title}>
                <div className="ic">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.copy}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
