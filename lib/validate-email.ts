const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const EMAIL_MAX_LENGTH = 254;

export function isValidEmail(value: unknown): value is string {
  return (
    typeof value === "string" &&
    value.length <= EMAIL_MAX_LENGTH &&
    EMAIL_PATTERN.test(value.trim())
  );
}

export function normalizeEmail(value: string): string {
  return value.trim().toLowerCase();
}
