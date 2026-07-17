import { describe, expect, it } from "vitest";
import { isValidEmail, normalizeEmail } from "./validate-email";

describe("isValidEmail", () => {
  it("accepts standard addresses", () => {
    expect(isValidEmail("hiker@trailmail.com")).toBe(true);
    expect(isValidEmail("first.last+tag@sub.domain.co")).toBe(true);
  });

  it("rejects malformed addresses", () => {
    expect(isValidEmail("")).toBe(false);
    expect(isValidEmail("no-at-sign")).toBe(false);
    expect(isValidEmail("missing@tld")).toBe(false);
    expect(isValidEmail("two@@ats.com")).toBe(false);
    expect(isValidEmail("spaces in@mail.com")).toBe(false);
  });

  it("rejects non-string input", () => {
    expect(isValidEmail(null)).toBe(false);
    expect(isValidEmail(undefined)).toBe(false);
    expect(isValidEmail(42)).toBe(false);
    expect(isValidEmail({ email: "a@b.com" })).toBe(false);
  });

  it("rejects overly long addresses", () => {
    const longEmail = `${"a".repeat(250)}@mail.com`;
    expect(isValidEmail(longEmail)).toBe(false);
  });
});

describe("normalizeEmail", () => {
  it("trims and lowercases", () => {
    expect(normalizeEmail("  Hiker@TrailMail.COM ")).toBe("hiker@trailmail.com");
  });
});
