import Image from "next/image";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "#story", label: "Story" },
  { href: "#how", label: "How it works" },
  { href: "#compare", label: "Why it wins" },
] as const;

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brand} aria-label="Peaktrekker home">
          <Image
            src="/assets/logo-light.png"
            alt="Peaktrekker"
            width={61}
            height={40}
            className={styles.brandLogo}
          />
          <span className={styles.brandName}>PEAKTREKKER</span>
        </a>
        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
          <a href="#waitlist" className={styles.cta}>
            Get It Now
          </a>
        </nav>
      </div>
    </header>
  );
}
