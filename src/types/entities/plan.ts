/**
 * Plan Entity Type
 * Represents a subscription plan that accounts can purchase
 */
export type Plan = {
  /** Unique identifier for the plan */
  planId: string;

  /** Display name of the plan */
  name: string; // e.g. "Enterprise – Annual", "Essential – 3 months"

  /** Duration of the plan in months */
  duration: number; // e.g. 12 for 1 year, 6 for 6 months, 3 for 3 months

  /** Base price of the plan */
  basePrice: {
    currency: string; // e.g. "USD", "AED"
    amount: number; // e.g. 99.99
  };

  /** Brief summary of what's included in this plan */
  tierDescription: string;

  /** List of Add On IDs this Plan can include (derived) */
  availableAddOnIds: string[];
};

/**
 * Plan Duration Enum for common durations
 */
export enum PlanDuration {
  THREE_MONTHS = 3,
  SIX_MONTHS = 6,
  ONE_YEAR = 12,
  TWO_YEARS = 24,
}
