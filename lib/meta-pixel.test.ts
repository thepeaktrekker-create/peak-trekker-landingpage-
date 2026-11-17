import { afterEach, describe, expect, it, vi } from "vitest";
import { buildPixelInitScript, isValidPixelId, trackLead } from "./meta-pixel";

describe("isValidPixelId", () => {
  it("accepts a numeric pixel id", () => {
    expect(isValidPixelId("1822317775700383")).toBe(true);
  });

  it.each([undefined, "", "abc", "123abc", "12 34", "1');alert(1);('"])(
    "rejects %s",
    (value) => {
      expect(isValidPixelId(value)).toBe(false);
    },
  );
});

describe("buildPixelInitScript", () => {
  it("initialises the pixel with the id and tracks PageView", () => {
    const script = buildPixelInitScript("1822317775700383");
    expect(script).toContain("https://connect.facebook.net/en_US/fbevents.js");
    expect(script).toContain("fbq('init', '1822317775700383');");
    expect(script).toContain("fbq('track', 'PageView');");
  });
});

describe("trackLead", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("does nothing when window is unavailable", () => {
    expect(() => trackLead()).not.toThrow();
  });

  it("does nothing when fbq is not loaded (e.g. ad blocker)", () => {
    vi.stubGlobal("window", {});
    expect(() => trackLead()).not.toThrow();
  });

  it("fires a Lead event when fbq is loaded", () => {
    const fbq = vi.fn();
    vi.stubGlobal("window", { fbq });
    trackLead();
    expect(fbq).toHaveBeenCalledWith("track", "Lead");
  });

  it("swallows errors thrown by fbq", () => {
    vi.stubGlobal("window", {
      fbq: () => {
        throw new Error("boom");
      },
    });
    expect(() => trackLead()).not.toThrow();
  });
});
