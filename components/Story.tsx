import Image from "next/image";
import { Reveal } from "./Reveal";
import styles from "./Story.module.css";

export function Story() {
  return (
    <section id="story" className={styles.section}>
      <div className={styles.topo} />
      <div className={styles.inner}>
        <Reveal>
          <div className={styles.kicker}>Our Story</div>
          <h2 className={styles.title}>We built this because bad gear ruins good adventures.</h2>
          <p className={styles.paragraph}>
            We&rsquo;re two backpackers who got tired of the tradeoff: either leave the grill at
            home, or haul a clattering metal box up the mountain. So we started sketching on the
            back of a trail map.
          </p>
          <p className={`${styles.paragraph} ${styles.paragraphLast}`}>
            Hundreds of prototypes later, the Flipper Grill folds flat as a notebook, weighs just
            1.5 kg, and snaps open in one twist. Nothing wasted. Everything intentional.
          </p>
          <div className={styles.founders}>
            <svg width="36" height="36" viewBox="0 0 100 100" aria-hidden="true">
              <path d="M50 12 L93 88 L7 88 Z" fill="#2E5D38" />
              <path d="M50 30 L40 88 L31 88 L43 28 Z" fill="#F2F6EE" />
            </svg>
            <div>
              <div className={styles.foundersName}>Bahaa &amp; Mac</div>
              <div className={styles.foundersRole}>Founders, Peaktrekker</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1} className={styles.visual}>
          <div className={styles.imageFrame}>
            <Image
              src="/assets/cases.jpg"
              alt="Flipper Grill packed into its canvas roll cases"
              width={1600}
              height={1067}
              className={styles.image}
            />
          </div>
          <div className={styles.badge}>
            <div className={styles.badgeLabel}>Packs into</div>
            <div className={styles.badgeValue}>a 1.5 kg roll</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
