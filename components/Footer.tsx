import { TAGLINE } from "@/lib/constants";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "./icons";
import styles from "./Footer.module.css";

const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/thepeaktrekker", icon: <FacebookIcon /> },
  { label: "Instagram", href: "https://www.instagram.com/peaktrekker", icon: <InstagramIcon /> },
  { label: "TikTok", href: "https://www.tiktok.com/@thepeaktrekker", icon: <TikTokIcon /> },
] as const;

const INFO_LINKS = [
  { label: "Privacy", href: "#" },
  { label: "Refunds", href: "#" },
  { label: "Shipping", href: "#" },
] as const;

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.columns}>
          <div>
            <div className={styles.brandRow}>
              <span className={styles.brandName}>Peaktrekker</span>
              <span className={styles.brandTm}>™</span>
            </div>
            <p className={styles.slogan}>Adventure just got delicious. 🌲</p>
          </div>
          <div>
            <div className={styles.columnTitle}>Follow the trail</div>
            <div className={styles.socials}>
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className={styles.columnTitle}>Info</div>
            <div className={styles.links}>
              {INFO_LINKS.map((link) => (
                <a key={link.label} href={link.href} className={styles.link}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomText}>
            © {new Date().getFullYear()} Peaktrekker. Built by adventurers, for adventurers.
          </div>
          <div className={styles.bottomText}>{TAGLINE}</div>
        </div>
      </div>
    </footer>
  );
}
