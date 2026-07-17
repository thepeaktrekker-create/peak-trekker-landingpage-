import Image from "next/image";
import { FeatureMarqueeStrip } from "./FeatureMarquee";
import { Reveal } from "./Reveal";
import { FoldIcon, GrillFlameIcon, SkewersIcon } from "./icons";
import styles from "./HowItWorks.module.css";

interface Step {
  number: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  icon: React.ReactNode;
  altKenburns?: boolean;
}

const STEPS: readonly Step[] = [
  {
    number: "01",
    title: "Fold it flat",
    text: "Unfold the frame and lock the legs. The whole rig snaps open in one twist, no tools, no loose parts to drop in the dirt.",
    image: "/assets/grill-stand.jpg",
    imageAlt: "Unfolding the Flipper Grill frame",
    icon: <FoldIcon />,
  },
  {
    number: "02",
    title: "Skewer your food",
    text: "Thread seven steel skewers with whatever the trail provided: halloumi, peppers, last night's catch. They rest in their own notches.",
    image: "/assets/skewers.jpg",
    imageAlt: "Seven steel skewers",
    icon: <SkewersIcon />,
    altKenburns: true,
  },
  {
    number: "03",
    title: "Grill & enjoy",
    text: "Set it over your fire or coals and let it work. Even heat, seven skewers, dinner with a view you earned on the way up.",
    image: "/assets/grill-hero.jpg",
    imageAlt: "Grilling over coals",
    icon: <GrillFlameIcon />,
  },
];

export function HowItWorks() {
  return (
    <section id="how" className={styles.section}>
      <div className={styles.glow} />
      <div className={styles.inner}>
        <Reveal>
          <div className={styles.heading}>
            <div className={styles.kicker}>How it works</div>
            <h2 className={styles.title}>From pack to plate in three moves.</h2>
          </div>
        </Reveal>
        <div className={styles.cards}>
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08}>
              <div className={styles.card}>
                <div className={styles.cardMedia}>
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    width={800}
                    height={533}
                    className={`${styles.cardImage} ${step.altKenburns ? styles.cardImageAlt : ""}`}
                  />
                  <div className={styles.cardMediaFade} />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <div className={styles.cardIcon}>{step.icon}</div>
                    <span className={styles.cardNumber}>{step.number}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{step.title}</h3>
                  <p className={styles.cardText}>{step.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <FeatureMarqueeStrip />
    </section>
  );
}
