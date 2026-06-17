import { PlayIcon } from "./Icons";
import { Reveal } from "./Reveal";

const stories = [
  ["Patient story 1", "How long I ignored it"],
  ["Patient story 2", "Why I finally came in"],
  ["Patient story 3", "How I feel after recovery"],
];

const notes = [
  "How long they ignored symptoms",
  "Why they finally sought treatment",
  "Their experience",
  "How they feel today",
];

export function StoriesSection() {
  return (
    <section className="sec" id="stories">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">Real stories from real patients</span>
          <h2 className="section-title">
            People who waited too long - and what changed after.
          </h2>
          <div className="vids">
            {stories.map(([name, caption]) => (
              <div className="vid" key={name}>
                <div className="ov">
                  <div className="nm">
                    {name}
                    <small>[ Embed video ]</small>
                  </div>
                  <div className="play-sm">
                    <PlayIcon size={22} />
                  </div>
                  <div className="nm story-caption">&quot;{caption}&quot;</div>
                </div>
              </div>
            ))}
          </div>
          <div className="stories-note">
            {notes.map((note) => (
              <span key={note}>* {note}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
