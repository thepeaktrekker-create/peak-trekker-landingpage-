"use client";

import { useSyncExternalStore } from "react";
import styles from "./AssemblyVideo.module.css";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void): () => void {
  const media = window.matchMedia(REDUCED_MOTION_QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

const getSnapshot = (): boolean => window.matchMedia(REDUCED_MOTION_QUERY).matches;
const getServerSnapshot = (): boolean => false;

/** Muted looping setup clip. Falls back to a paused video with controls for reduced motion. */
export function AssemblyVideo() {
  const reducedMotion = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <figure className={styles.wrap}>
      <div className={styles.frame}>
        <video
          className={styles.video}
          src="/assets/video/assembly-fast.mp4"
          poster="/assets/video/assembly-poster.jpg"
          width={720}
          height={1280}
          muted
          loop
          playsInline
          preload="metadata"
          autoPlay={!reducedMotion}
          controls={reducedMotion}
          aria-label="Unpacking, unfolding and grilling with the Flipper Grill"
        />
      </div>
      <figcaption className={styles.caption}>Pack to plate, sped up. Real trail, real fire.</figcaption>
    </figure>
  );
}
