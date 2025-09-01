/**
 * Add On Entity Type
 * An extra feature or service you can attach to a Plan (and purchase as part of a Subscription)
 */
export type AddOn = {
  /** Unique identifier for the add on */
  addOnId: string;

  /** Display name of the add on */
  name: string; // e.g. "Priority Pass", "Content Usage Booster"

  /** Brief text explaining the extra */
  description: string;

  /** Price of the add on */
  price: {
    currency: string; // e.g. "USD", "AED"
    amount: number; // e.g. 19.99
  };

  /** List of Plan IDs that can include this Add On (catalog membership) */
  compatiblePlanIds: string[];

  /** List of Subscription IDs that purchased this Add On (what was actually purchased) */
  purchasedInSubscriptionIds: string[];
};
