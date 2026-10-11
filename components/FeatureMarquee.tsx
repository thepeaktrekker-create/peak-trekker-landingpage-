import {
  CompactIcon,
  DropIcon,
  FeatherIcon,
  ShieldCheckIcon,
  SkewersIcon,
  TimerIcon,
} from "./icons";
import styles from "./FeatureMarquee.module.css";

const FEATURES = [
  { icon: <FeatherIcon size={22} stroke="#FFFFFF" />, label: "Ultra Lightweight" },
  { icon: <CompactIcon size={22} stroke="#FFFFFF" />, label: "Compact Folding" },
  { icon: <SkewersIcon size={22} stroke="#FFFFFF" />, label: "7 Skewers" },
  { icon: <ShieldCheckIcon size={22} stroke="#FFFFFF" />, label: "Premium Steel" },
  { icon: <TimerIcon size={22} stroke="#FFFFFF" />, label: "60-sec Setup" },
  { icon: <DropIcon size={22} stroke="#FFFFFF" />, label: "Easy Clean" },
] as const;

function FeatureGroup({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className={styles.group} aria-hidden={ariaHidden || undefined}>
      {FEATURES.map((feature) => (
        <span key={feature.label} style={{ display: "flex" }}>
          <span className={styles.item}>
            {feature.icon}
            {feature.label}
          </span>
          <span className={styles.dot}>·</span>
        </span>
      ))}
    </div>
  );
}

/** Infinite scrolling feature strip (two copies of the list → seamless -50% loop). */
export function FeatureMarqueeStrip() {
  return (
    <div className={styles.strip}>
      <div className={styles.track}>
        <FeatureGroup />
        <FeatureGroup ariaHidden />
      </div>
    </div>
  );
}
