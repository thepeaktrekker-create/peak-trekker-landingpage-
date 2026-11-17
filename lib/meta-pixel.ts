const PIXEL_ID_PATTERN = /^\d{10,20}$/;
const FBEVENTS_URL = "https://connect.facebook.net/en_US/fbevents.js";

type Fbq = (command: "track", event: string) => void;

declare global {
  interface Window {
    fbq?: Fbq;
  }
}

/** Public Pixel ID from env. Undefined when unset or malformed, so the pixel is disabled. */
export function getMetaPixelId(): string | undefined {
  const id = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  return isValidPixelId(id) ? id : undefined;
}

/** Digits only, so the ID is safe to interpolate into the inline script. */
export function isValidPixelId(value: string | undefined): value is string {
  return typeof value === "string" && PIXEL_ID_PATTERN.test(value);
}

/** Standard Meta Pixel base code: loads fbevents.js, inits the pixel, tracks PageView. */
export function buildPixelInitScript(pixelId: string): string {
  return `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'${FBEVENTS_URL}');
fbq('init', '${pixelId}');
fbq('track', 'PageView');`;
}

export function getNoscriptPixelUrl(pixelId: string): string {
  return `https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`;
}

/** Fire a Lead event. Safe no-op when the pixel is blocked or not loaded. */
export function trackLead(): void {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  try {
    window.fbq("track", "Lead");
  } catch {
    // Tracking must never break the signup flow.
  }
}
