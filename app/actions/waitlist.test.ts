import { beforeEach, describe, expect, it, vi } from "vitest";

const insertMock = vi.fn();
const getClientMock = vi.fn();

vi.mock("@/lib/supabase", () => ({
  getSupabaseServerClient: () => getClientMock(),
}));

import { joinWaitlist } from "./waitlist";

function supabaseReturning(result: { error: { code?: string } | null }) {
  insertMock.mockResolvedValue(result);
  return { from: () => ({ insert: insertMock }) };
}

describe("joinWaitlist", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(console, "error").mockImplementation(() => undefined);
  });

  it("rejects an invalid email without touching Supabase", async () => {
    const result = await joinWaitlist("not-an-email");
    expect(result.ok).toBe(false);
    expect(result.error).toMatch(/valid email/i);
    expect(getClientMock).not.toHaveBeenCalled();
  });

  it("inserts a normalized email and succeeds", async () => {
    getClientMock.mockReturnValue(supabaseReturning({ error: null }));
    const result = await joinWaitlist("  Hiker@TrailMail.COM ");
    expect(result).toEqual({ ok: true });
    expect(insertMock).toHaveBeenCalledWith({ email: "hiker@trailmail.com" });
  });

  it("treats duplicate emails as success", async () => {
    getClientMock.mockReturnValue(supabaseReturning({ error: { code: "23505" } }));
    const result = await joinWaitlist("hiker@trailmail.com");
    expect(result).toEqual({ ok: true });
  });

  it("returns a friendly error on other insert failures", async () => {
    getClientMock.mockReturnValue(supabaseReturning({ error: { code: "500" } }));
    const result = await joinWaitlist("hiker@trailmail.com");
    expect(result.ok).toBe(false);
    expect(result.error).toMatch(/try again/i);
  });

  it("fails gracefully when Supabase is not configured", async () => {
    getClientMock.mockReturnValue(null);
    const result = await joinWaitlist("hiker@trailmail.com");
    expect(result.ok).toBe(false);
    expect(result.error).toMatch(/unavailable/i);
  });
});
