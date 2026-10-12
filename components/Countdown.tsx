"use client";

import { useEffect, useState } from "react";
import styles from "./Countdown.module.css";

interface CountdownProps {
  /** ISO date-time string the countdown ends at (local time). */
  target: string;
}

interface TimeParts {
  days: string;
  hours: string;
  mins: string;
  secs: string;
}

const INITIAL: TimeParts = { days: "00", hours: "00", mins: "00", secs: "00" };

function pad(value: number): string {
  return String(Math.max(0, value)).padStart(2, "0");
}

function partsUntil(targetMs: number): TimeParts {
  let diff = Math.max(0, targetMs - Date.now());
  const days = Math.floor(diff / 86_400_000);
  diff -= days * 86_400_000;
  const hours = Math.floor(diff / 3_600_000);
  diff -= hours * 3_600_000;
  const mins = Math.floor(diff / 60_000);
  diff -= mins * 60_000;
  const secs = Math.floor(diff / 1_000);
  return { days: pad(days), hours: pad(hours), mins: pad(mins), secs: pad(secs) };
}

/** Ticking countdown tiles, styled after the design's launch countdown. */
export function Countdown({ target }: CountdownProps) {
  const [time, setTime] = useState<TimeParts>(INITIAL);

  useEffect(() => {
    const targetMs = new Date(target).getTime();
    const tick = () => setTime(partsUntil(targetMs));
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [target]);

  const tiles = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Mins", value: time.mins },
    { label: "Secs", value: time.secs },
  ];

  return (
    <div className={styles.tiles}>
      {tiles.map((tile) => (
        <div key={tile.label} className={styles.tile}>
          <div className={styles.value}>{tile.value}</div>
          <div className={styles.label}>{tile.label}</div>
        </div>
      ))}
    </div>
  );
}
