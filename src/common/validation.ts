/**
 * Throw if `value` is not a non-empty string.
 */
export function requireNonEmptyString(field: string, value: any) {
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(`${field} must be a non-empty string`);
  }
}
