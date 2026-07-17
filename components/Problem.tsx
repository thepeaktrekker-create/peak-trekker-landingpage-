import { Reveal } from "./Reveal";
import { FlameIcon, RotateIcon, SadFaceIcon } from "./icons";
import styles from "./Problem.module.css";

const PAIN_POINTS = [
  { icon: <RotateIcon />, text: "You constantly rotate each skewer manually" },
  { icon: <FlameIcon />, text: "Some burn, others stay raw" },
  { icon: <SadFaceIcon />, text: "Outdoor grilling becomes frustrating instead of fun" },
] as const;

export function Problem() {
  return (
    <section id="problem" className={styles.section}>
      <div className={styles.topo} />
      <div className={styles.glow} />
      <div className={styles.inner}>
        <div className={styles.cards}>
          {PAIN_POINTS.map((point, i) => (
            <Reveal key={point.text} delay={i * 0.08}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>{point.icon}</div>
                <div className={styles.cardText}>{point.text}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className={styles.result}>
            <div className={styles.resultLabel}>The result?</div>
            <div className={styles.resultStatement}>
              Uneven food. <span className={styles.resultAccent}>Wasted time.</span> Ruined
              moments.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
