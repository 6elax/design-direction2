/**
 * validators.ts
 *
 * Pure validation functions extracted from log.ts for independent testability.
 * Each function takes an input value and returns a result object indicating
 * validity, keeping side effects (process.exit, console.error) in log.ts.
 */

// ───────────────────────────────────────────────────────────────────
// Constants (exported so log.ts can reference the same source of truth)
// ───────────────────────────────────────────────────────────────────

/** Allowed values for the 'type' field on a learning entry. */
export const ALLOWED_TYPES = ["ERROR-CODE", "FRUSTRATION"] as const;

/** Allowed values for the 'source' field on a learning entry. */
export const ALLOWED_SOURCES = ["USER", "AGENT"] as const;

/**
 * Regex patterns that flag suspicious prompt-injection content.
 * If any pattern matches the insight text, the entry should be rejected.
 */
export const INJECTION_PATTERNS: RegExp[] = [
  /ignore\s+(all\s+)?previous\s+(instructions|context|rules)/i,
  /you\s+are\s+now\s+/i,
  /always\s+output\s+no\s+findings/i,
  /skip\s+(all\s+)?(security|review|checks)/i,
  /override[:\s]/i,
  /\bsystem\s*:/i,
  /\bassistant\s*:/i,
  /\buser\s*:/i,
  /do\s+not\s+(report|flag|mention)/i,
  /approve\s+(all|every|this)/i,
];

// ───────────────────────────────────────────────────────────────────
// Result type
// ───────────────────────────────────────────────────────────────────

/** Return type for every validation function. */
export interface ValidationResult {
  /** true when the value passes validation (or is undefined / optional). */
  valid: boolean;
  /** Human-readable error description when valid === false. */
  error?: string;
}

// ───────────────────────────────────────────────────────────────────
// Validation functions
// ───────────────────────────────────────────────────────────────────

/**
 * Validates the 'type' field.
 * Undefined is acceptable (field is optional for updates).
 * If provided, must be one of ALLOWED_TYPES.
 */
export function validateType(type: string | undefined): ValidationResult {
  if (type === undefined) return { valid: true };
  if (!(ALLOWED_TYPES as readonly string[]).includes(type)) {
    return {
      valid: false,
      error: `missing or invalid type "${type}", must be one of: ${ALLOWED_TYPES.join(", ")}`,
    };
  }
  return { valid: true };
}

/**
 * Validates the 'source' field.
 * Undefined is acceptable (field is optional for updates).
 * If provided, must be one of ALLOWED_SOURCES.
 */
export function validateSource(source: string | undefined): ValidationResult {
  if (source === undefined) return { valid: true };
  if (!(ALLOWED_SOURCES as readonly string[]).includes(source)) {
    return {
      valid: false,
      error: `missing or invalid source "${source}", must be one of: ${ALLOWED_SOURCES.join(", ")}`,
    };
  }
  return { valid: true };
}

/**
 * Validates the 'key' field.
 * Undefined is acceptable (field is optional for updates).
 * If provided, must contain only alphanumeric characters, hyphens, and underscores.
 */
export function validateKey(key: string | undefined): ValidationResult {
  if (key === undefined) return { valid: true };
  if (!/^[a-zA-Z0-9_-]+$/.test(key)) {
    return {
      valid: false,
      error:
        "missing or invalid key, must be alphanumeric with hyphens/underscores only",
    };
  }
  return { valid: true };
}

/**
 * Checks the 'insight' text for prompt-injection patterns.
 * Returns { safe: false } if any pattern matches, { safe: true } otherwise.
 * Null/undefined insight is treated as safe (nothing to inject).
 */
export function checkInjectionPatterns(
  insight: string | null | undefined,
): { safe: boolean; error?: string } {
  if (!insight) return { safe: true };
  for (const pat of INJECTION_PATTERNS) {
    if (pat.test(insight)) {
      return {
        safe: false,
        error:
          "insight contains suspicious instruction-like content, rejected",
      };
    }
  }
  return { safe: true };
}
