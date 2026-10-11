import type { ReactNode } from "react";
import { POLICIES_UPDATED, SOCIAL_URLS } from "@/lib/constants";
import { Footer } from "./Footer";
import { Header } from "./Header";
import styles from "./PolicyPage.module.css";

interface PolicyPageProps {
  title: string;
  children: ReactNode;
}

/** Shared shell for the privacy, refunds and shipping pages. */
export function PolicyPage({ title, children }: PolicyPageProps) {
  return (
    <>
      <Header anchorBase="/" />
      <main className={styles.main}>
        <article className={styles.inner}>
          <div className={styles.kicker}>Info</div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.updated}>Last updated {POLICIES_UPDATED}</p>
          <div className={styles.content}>{children}</div>
        </article>
      </main>
      <Footer />
    </>
  );
}

/** Closing section every policy page ends with: where to reach us. */
export function PolicyContact() {
  return (
    <>
      <h2>Contact</h2>
      <p>
        Questions? Message us on{" "}
        <a href={SOCIAL_URLS.instagram} target="_blank" rel="noopener noreferrer">
          Instagram
        </a>{" "}
        or{" "}
        <a href={SOCIAL_URLS.facebook} target="_blank" rel="noopener noreferrer">
          Facebook
        </a>{" "}
        and we will get back to you.
      </p>
    </>
  );
}
