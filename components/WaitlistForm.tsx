"use client";

import { useState, type FormEvent } from "react";
import { joinWaitlist } from "@/app/actions/waitlist";
import { ArrowRightIcon, CheckIcon } from "./icons";
import styles from "./LiveCta.module.css";

type FormStatus = "idle" | "submitting" | "success";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setError(null);
    try {
      const result = await joinWaitlist(email);
      if (result.ok) {
        setStatus("success");
      } else {
        setStatus("idle");
        setError(result.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("idle");
      setError("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className={styles.successCard}>
        <div className={styles.successIcon}>
          <CheckIcon size={28} stroke="#FFFFFF" strokeWidth={3} />
        </div>
        <div className={styles.successTitle}>You&rsquo;re on the list! 🌲</div>
        <div className={styles.successText}>
          We&rsquo;ll send one email when restocks and new gear drop. Pack your appetite.
        </div>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@trailmail.com"
          required
          aria-label="Email address"
          className={styles.input}
        />
        <button type="submit" disabled={status === "submitting"} className={styles.submit}>
          {status === "submitting" ? "Joining…" : "Notify Me"}
          <ArrowRightIcon size={17} stroke="#FFFFFF" />
        </button>
      </form>
      {error ? (
        <div className={styles.errorText} role="alert">
          {error}
        </div>
      ) : (
        <div className={styles.hint}>1,200+ adventurers already in.</div>
      )}
    </>
  );
}
