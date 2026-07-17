"use server";

import { getSupabaseServerClient } from "@/lib/supabase";
import { isValidEmail, normalizeEmail } from "@/lib/validate-email";

export interface WaitlistResult {
  ok: boolean;
  error?: string;
}

const UNIQUE_VIOLATION = "23505";

export async function joinWaitlist(email: unknown): Promise<WaitlistResult> {
  if (!isValidEmail(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  const supabase = getSupabaseServerClient();
  if (!supabase) {
    console.error("joinWaitlist: Supabase env vars are not configured");
    return { ok: false, error: "Signups are temporarily unavailable. Please try again later." };
  }

  const { error } = await supabase
    .from("waitlist")
    .insert({ email: normalizeEmail(email) });

  if (error) {
    // Duplicate signups count as success — the user is already on the list.
    if (error.code === UNIQUE_VIOLATION) {
      return { ok: true };
    }
    console.error("joinWaitlist: insert failed", error);
    return { ok: false, error: "Something went wrong. Please try again." };
  }

  return { ok: true };
}
