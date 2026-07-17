"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { QuoteIcon } from "./icons";
import styles from "./SocialProof.module.css";

const COUNTER_TARGETS = [91, 94, 89] as const;
const COUNTER_LABELS = [
  "love the even cooking",
  "say it's their smartest gear",
  "feel like grill pros",
] as const;
const COUNTER_DURATION_MS = 1700;
const COUNTER_THRESHOLD = 0.3;
const COUNTER_FALLBACK_MS = 2000;

function useCountersOnView(ref: React.RefObject<HTMLElement | null>) {
  const [counts, setCounts] = useState<readonly number[]>([0, 0, 0]);
  const startedRef = useRef(false);

  useEffect(() => {
    const run = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min(1, (now - start) / COUNTER_DURATION_MS);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCounts(COUNTER_TARGETS.map((target) => Math.round(target * eased)));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const el = ref.current;
    let observer: IntersectionObserver | undefined;
    if (el && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              run();
              observer?.disconnect();
            }
          });
        },
        { threshold: COUNTER_THRESHOLD },
      );
      observer.observe(el);
    }
    const fallback = setTimeout(run, COUNTER_FALLBACK_MS);

    return () => {
      observer?.disconnect();
      clearTimeout(fallback);
    };
  }, [ref]);

  return counts;
}

export function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null);
  const counts = useCountersOnView(sectionRef);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.topo} />
      <div className={styles.inner}>
        <Reveal>
          <div className={styles.kickerWrap}>
            <div className={styles.kicker}>Field-tested</div>
          </div>
        </Reveal>
        <div className={styles.stats}>
          {COUNTER_TARGETS.map((_, i) => (
            <div key={COUNTER_LABELS[i]} className={styles.stat}>
              <div className={styles.statValue}>{counts[i]}%</div>
              <div className={styles.statLabel}>{COUNTER_LABELS[i]}</div>
            </div>
          ))}
        </div>
        <Reveal>
          <div className={styles.quoteWrap}>
            <QuoteIcon />
            <p className={styles.quote}>
              &ldquo;I unfolded it beside an alpine lake, threaded seven skewers, and gave the
              handle one twist, and every single one turned together. No juggling, no scorched
              edges. Just the smell of charred peppers drifting over the water and my mates
              swearing I&rsquo;d smuggled a chef up the mountain.&rdquo;
            </p>
            <div className={styles.attribution}>
              <div className={styles.avatar}>JR</div>
              <div>
                <div className={styles.name}>Jonas R.</div>
                <div className={styles.role}>Early tester · Dolomites</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
