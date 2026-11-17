import type { Metadata } from "next";
import { PolicyContact, PolicyPage } from "@/components/PolicyPage";

const KICKSTARTER_PRIVACY_URL = "https://www.kickstarter.com/privacy";
const META_PRIVACY_URL = "https://www.facebook.com/privacy/policy";
const META_AD_SETTINGS_URL = "https://www.facebook.com/adpreferences";

export const metadata: Metadata = {
  title: "Privacy policy | Peaktrekker",
  description: "What information the Peaktrekker website collects and how we use it.",
};

export default function PrivacyPage() {
  return (
    <PolicyPage title="Privacy policy">
      <p>
        Peaktrekker makes the Flipper Grill. This page explains what information this website
        collects and what we do with it. The short version: we store your email address if you give it
        to us, and we use the Meta Pixel to measure our advertising.
      </p>

      <h2>What we collect</h2>
      <p>
        If you sign up to be notified about restocks and new gear, we store the email address you
        enter and the date you signed up. That is the only personal information we store.
      </p>
      <p>
        This site uses the Meta Pixel, a tool from Meta (Facebook and Instagram). It uses cookies
        and similar technology to record that a visit happened, which pages were viewed, and when
        someone signs up to the list. Meta uses this to measure and improve our ads and to show our
        ads to people who may be interested. The Pixel does not receive your email address from
        this site. Meta handles this data under{" "}
        <a href={META_PRIVACY_URL} target="_blank" rel="noopener noreferrer">
          its own privacy policy
        </a>
        .
      </p>

      <h2>How we use it</h2>
      <p>
        We use your email address to tell you when the Flipper Grill is back in stock and when we
        release new gear. We do not sell your email address or share it with anyone for their own
        marketing.
      </p>

      <h2>Where it is kept</h2>
      <p>
        Your email address is stored with Supabase, our database provider. The website is hosted
        by Vercel, which keeps standard server logs, such as IP addresses, to keep the site running
        and secure.
      </p>

      <h2>Buying a Flipper Grill</h2>
      <p>
        Orders are placed on Kickstarter, not on this website. Kickstarter processes your payment
        and passes us the details we need to deliver your order, such as your name, email and
        shipping address. How Kickstarter handles your information is covered by{" "}
        <a href={KICKSTARTER_PRIVACY_URL} target="_blank" rel="noopener noreferrer">
          its own privacy policy
        </a>
        .
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask us to remove your email address from our list at any time, and we will delete
        it.
      </p>
      <p>
        You can control how Meta uses your activity to show you ads in your{" "}
        <a href={META_AD_SETTINGS_URL} target="_blank" rel="noopener noreferrer">
          Meta ad settings
        </a>
        , and you can block cookies or use a tracking blocker in your browser. If you are in
        California, you can also tell us not to share your information for advertising by emailing
        us.
      </p>

      <h2>Changes to this policy</h2>
      <p>If this policy changes, we will update this page and the date at the top.</p>

      <PolicyContact />
    </PolicyPage>
  );
}
