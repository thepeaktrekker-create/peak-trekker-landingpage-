"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";
import { PRODUCT_FACTS } from "@/lib/constants";
import { ArrowRightIcon, CompactIcon, FeatherIcon, RotateIcon } from "./icons";
import styles from "./Hero.module.css";

interface EmberConfig {
  left: string;
  bottom: string;
  size: number;
  glow: number;
  duration: number;
  delay: number;
  bright?: boolean;
}

const EMBERS: readonly EmberConfig[] = [
  { left: "8%", bottom: "8%", size: 6, glow: 8, duration: 7, delay: 0 },
  { left: "16%", bottom: "6%", size: 4, glow: 7, duration: 8.5, delay: 1.4 },
  { left: "24%", bottom: "10%", size: 5, glow: 8, duration: 6.4, delay: 2.6, bright: true },
  { left: "33%", bottom: "5%", size: 3, glow: 6, duration: 9, delay: 0.7 },
  { left: "44%", bottom: "9%", size: 6, glow: 9, duration: 7.8, delay: 3.5 },
  { left: "55%", bottom: "6%", size: 4, glow: 7, duration: 8.2, delay: 1.9, bright: true },
  { left: "64%", bottom: "11%", size: 5, glow: 8, duration: 6.8, delay: 4.2 },
  { left: "73%", bottom: "7%", size: 3, glow: 6, duration: 9.4, delay: 2.1 },
  { left: "82%", bottom: "9%", size: 6, glow: 9, duration: 7.1, delay: 0.4, bright: true },
  { left: "90%", bottom: "6%", size: 4, glow: 7, duration: 8.7, delay: 3 },
  { left: "38%", bottom: "4%", size: 3, glow: 6, duration: 9.8, delay: 5 },
  { left: "69%", bottom: "4%", size: 4, glow: 7, duration: 7.6, delay: 4.6, bright: true },
];

interface GodrayConfig {
  width: number;
  rotation: string;
  blur: number;
  duration: number;
  delay: number;
  gradient: string;
}

const GODRAYS: readonly GodrayConfig[] = [
  {
    width: 90, rotation: "-22deg", blur: 6, duration: 9, delay: 0,
    gradient: "linear-gradient(180deg,rgba(238,243,233,.5),rgba(238,243,233,0) 70%)",
  },
  {
    width: 58, rotation: "-8deg", blur: 5, duration: 11, delay: 1,
    gradient: "linear-gradient(180deg,rgba(238,243,233,.45),rgba(238,243,233,0) 70%)",
  },
  {
    width: 120, rotation: "10deg", blur: 7, duration: 10, delay: 0.5,
    gradient: "linear-gradient(180deg,rgba(238,243,233,.22),rgba(238,243,233,0) 68%)",
  },
  {
    width: 70, rotation: "24deg", blur: 6, duration: 12, delay: 1.6,
    gradient: "linear-gradient(180deg,rgba(238,243,233,.4),rgba(238,243,233,0) 66%)",
  },
];

const BULLETS = [
  { icon: <CompactIcon size={15} strokeWidth={2} />, text: "Portable, foldable" },
  { icon: <RotateIcon size={15} strokeWidth={2.2} />, text: "One flip → all skewers rotate" },
  { icon: <FeatherIcon size={15} strokeWidth={2} />, text: "Ultra lightweight" },
] as const;

const PARALLAX_MAX_SCROLL = 900;
const PARALLAX_IMAGE_FACTOR = 0.14;
const PARALLAX_IMAGE_MAX_PX = 90;
const PARALLAX_GLOW_FACTOR = 0.05;

export function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      if (y > PARALLAX_MAX_SCROLL) return;
      if (imageRef.current) {
        const shift = Math.min(y * PARALLAX_IMAGE_FACTOR, PARALLAX_IMAGE_MAX_PX);
        imageRef.current.style.transform = `translateY(${shift.toFixed(1)}px)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translateY(${(y * PARALLAX_GLOW_FACTOR).toFixed(1)}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className={styles.hero}>
      <div ref={glowRef} className={styles.sunGlow} />
      <div className={styles.sunCore} />
      <div className={styles.godrays}>
        {GODRAYS.map((ray) => (
          <div
            key={ray.rotation}
            className={styles.godray}
            style={
              {
                width: ray.width,
                background: ray.gradient,
                "--r": ray.rotation,
                "--blur": `${ray.blur}px`,
                "--dur": `${ray.duration}s`,
                "--delay": `${ray.delay}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <div className={styles.haze} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/ridge.svg" alt="" aria-hidden="true" className={styles.ridge} />
      <div className={styles.vignette} />
      <div className={styles.cornerGlow} />

      <div className={styles.embers} aria-hidden="true">
        {EMBERS.map((ember, i) => (
          <span
            key={i}
            className={`${styles.ember} ${ember.bright ? styles.emberBright : ""}`}
            style={
              {
                left: ember.left,
                bottom: ember.bottom,
                width: ember.size,
                height: ember.size,
                "--glow": `${ember.glow}px`,
                "--dur": `${ember.duration}s`,
                "--delay": `${ember.delay}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div className={styles.grid}>
        <div>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Now Available
          </div>
          <h1 className={styles.title}>
            Grill Smarter.
            <br />
            Every Time. Anywhere.
          </h1>
          <p className={styles.subtitle}>
            Meet the Flipper Grill, the first synchronized multi skewer grilling system that
            flips all skewers in 1 twist.
          </p>
          <ul className={styles.bullets}>
            {BULLETS.map((bullet) => (
              <li key={bullet.text} className={styles.bullet}>
                <span className={styles.bulletIcon}>{bullet.icon}</span>
                {bullet.text}
              </li>
            ))}
          </ul>
          <div className={styles.ctaRow}>
            <a href="#waitlist" className={styles.ctaPrimary}>
              Get the Flipper Grill
              <ArrowRightIcon size={18} stroke="#FFFFFF" />
            </a>
            <a href="#how" className={styles.ctaSecondary}>
              See how it folds
            </a>
          </div>
          <div className={styles.stats}>
            <div>
              <div className={styles.statValue}>{PRODUCT_FACTS.packWeight}</div>
              <div className={styles.statLabel}>pack weight</div>
            </div>
            <div className={styles.statDivider} />
            <div>
              <div className={styles.statValue}>{PRODUCT_FACTS.skewerCount}</div>
              <div className={styles.statLabel}>steel skewers</div>
            </div>
            <div className={styles.statDivider} />
            <div>
              <div className={styles.statValue}>{PRODUCT_FACTS.setupSeconds} s</div>
              <div className={styles.statLabel}>to set up</div>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div ref={imageRef} className={styles.imageFrame}>
            <Image
              src="/assets/grill-hero.jpg"
              alt="The Flipper Grill assembled with seven skewers"
              width={1600}
              height={1067}
              priority
              className={styles.image}
            />
            <div className={styles.imageTint} />
            <div className={styles.imageSweep} />
          </div>
          <div className={styles.floatBadge}>
            <div className={styles.floatBadgeLabel}>Folds to</div>
            <div className={styles.floatBadgeValue}>a canvas roll</div>
          </div>
        </div>
      </div>
    </section>
  );
}
