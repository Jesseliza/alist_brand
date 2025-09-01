/**
 * Formats large numbers to readable format with K notation
 * @param value - number or string to format
 * @returns formatted string (e.g., "35K", "37.5K")
 */
export function formatToK(value: string | number): string {
  const num = typeof value === "string" ? parseFloat(value) : value;

  if (isNaN(num)) return value.toString();

  if (num >= 1000) {
    const kValue = num / 1000;
    // Always show 1 decimal place for K notation
    return `${kValue.toFixed(1)}K`;
  }

  return num.toString();
}

/**
 * Formats an array of values to K notation
 * @param values - array of numbers or strings
 * @returns array of formatted strings
 */
export function formatArrayToK(values: (string | number)[]): string[] {
  return values.map(formatToK);
}
