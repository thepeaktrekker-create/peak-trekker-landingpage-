"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in seconds (design uses 0 / .08 / .16). */
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

const OBSERVER_THRESHOLD = 0.12;
const OBSERVER_ROOT_MARGIN = "0px 0px -7% 0px";
const FALLBACK_REVEAL_MS = 2000;

/**
 * Reveal-on-scroll wrapper matching the design's [data-reveal] behavior:
 * fades/slides in when 12% visible, with a 2s safety fallback.
 */
export function Reveal({ children, delay = 0, className, style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      // No observer support → reveal on the next frame instead of during the effect.
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: OBSERVER_THRESHOLD, rootMargin: OBSERVER_ROOT_MARGIN },
    );
    observer.observe(el);

    const fallback = setTimeout(() => setVisible(true), FALLBACK_REVEAL_MS);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  const classes = ["reveal", visible ? "isVisible" : "", className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={ref}
      className={classes}
      style={{ ...style, "--reveal-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}
