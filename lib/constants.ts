/**
 * Where every CTA button points.
 *
 * TODO: The Kickstarter campaign is not live yet — this is a PLACEHOLDER
 * (the Peaktrekker creator profile). Replace with the real campaign URL
 * (e.g. https://www.kickstarter.com/projects/peaktrekker/flipper-grill)
 * the moment it launches. This is the only line that needs to change.
 */
export const CAMPAIGN_URL = "https://www.kickstarter.com/profile/peaktrekker";

export const SOCIAL_URLS = {
  facebook: "https://www.facebook.com/thepeaktrekker",
  instagram: "https://www.instagram.com/peaktrekker",
  tiktok: "https://www.tiktok.com/@thepeaktrekker",
} as const;

/** "Last updated" date shown on the privacy, refunds and shipping pages. */
export const POLICIES_UPDATED = "11 October 2026";

export const PRODUCT_FACTS = {
  packWeight: "1.5 kg",
  skewerCount: 7,
  setupSeconds: 60,
} as const;

export const TAGLINE = "One twist. Seven skewers. Perfect grilling anywhere.";

/** Countdown deadline — the launch offer ends at the end of this day. */
export const COUNTDOWN_TARGET_ISO = "2026-10-27T23:59:59";
