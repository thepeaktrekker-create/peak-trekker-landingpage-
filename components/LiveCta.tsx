import { CAMPAIGN_URL, COUNTDOWN_TARGET_ISO } from "@/lib/constants";
import { Countdown } from "./Countdown";
import { Reveal } from "./Reveal";
import { WaitlistForm } from "./WaitlistForm";
import { ArrowRightIcon } from "./icons";
import styles from "./LiveCta.module.css";

export function LiveCta() {
  return (
    <section id="waitlist" className={styles.section}>
      <div className={styles.topo} />
      <div className={styles.glow} />
      <div className={styles.inner}>
        <Reveal>
          <div className={styles.liveBadge}>
            <span className={styles.liveDot} />
            We&rsquo;re live
          </div>
          <h2 className={styles.title}>The Flipper Grill is here.</h2>
          <p className={styles.subtitle}>
            The wait is over. Grab yours today and make every adventure delicious. The launch
            offer ends when the clock runs out.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <Countdown target={COUNTDOWN_TARGET_ISO} />
          <a
            href={CAMPAIGN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.buyButton}
          >
            Get the Flipper Grill
            <ArrowRightIcon size={18} stroke="#FFFFFF" />
          </a>
        </Reveal>
        <Reveal delay={0.16}>
          <div className={styles.formIntro}>Or get notified about restocks &amp; new gear</div>
          <WaitlistForm />
        </Reveal>
      </div>
    </section>
  );
}
