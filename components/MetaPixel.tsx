import Script from "next/script";
import { buildPixelInitScript, getMetaPixelId, getNoscriptPixelUrl } from "@/lib/meta-pixel";

/** Meta Pixel (browser only). Renders nothing unless NEXT_PUBLIC_META_PIXEL_ID is set. */
export function MetaPixel() {
  const pixelId = getMetaPixelId();
  if (!pixelId) return null;

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {buildPixelInitScript(pixelId)}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={getNoscriptPixelUrl(pixelId)}
        />
      </noscript>
    </>
  );
}
