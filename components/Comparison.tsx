import { Reveal } from "./Reveal";
import { CheckIcon, CrossIcon } from "./icons";
import styles from "./Comparison.module.css";

const ROWS = [
  { label: "Pack weight", flipper: "1.5 kg", other: "4 to 9 kg" },
  { label: "Packs down to", flipper: "A canvas roll", other: "A car boot" },
  { label: "Setup time", flipper: "60 seconds", other: "Tools & patience" },
  { label: "Skewers", flipper: "7 included", other: "Sold separately" },
  { label: "Cleanup", flipper: "Wipe & roll", other: "Scrub & soak" },
] as const;

export function Comparison() {
  return (
    <section id="compare" className={styles.section}>
      <div className={styles.inner}>
        <Reveal>
          <div className={styles.heading}>
            <div className={styles.kicker}>Why it wins</div>
            <h2 className={styles.title}>Flipper Grill vs. the bulky usual.</h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className={styles.table}>
            <div className={styles.row}>
              <div className={styles.headSpacer} />
              <div className={styles.headFlipper}>Flipper Grill</div>
              <div className={styles.headOther}>Traditional grill</div>
            </div>
            {ROWS.map((row) => (
              <div key={row.label} className={styles.row}>
                <div className={styles.label}>{row.label}</div>
                <div className={styles.flipperCell}>{row.flipper}</div>
                <div className={styles.otherCell}>{row.other}</div>
              </div>
            ))}
            <div className={styles.row}>
              <div className={styles.label}>Trailhead ready</div>
              <div className={styles.flipperCell}>
                <span className={styles.yesBadge}>
                  <CheckIcon size={16} strokeWidth={3} />
                </span>
              </div>
              <div className={styles.otherCell}>
                <span className={styles.noBadge}>
                  <CrossIcon size={15} />
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
