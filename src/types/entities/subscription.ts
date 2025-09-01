/**
 * Subscription Status Enum
 */
export enum SubscriptionStatus {
  ACTIVE = "active",
  USED = "used",
  EXPIRED = "expired",
  CANCELLED = "cancelled",
  PENDING = "pending",
}

/**
 * Payment Method Type
 */
export type PaymentMethod = {
  type: string; // e.g. "Visa", "Mastercard", "PayPal"
  lastFourDigits?: string; // e.g. "5085"
  maskedNumber?: string; // e.g. "**** **** **** 5085"
};

/**
 * Subscription Entity Type
 * Records an Account's purchase of a specific Plan (and chosen Add Ons)
 */
export type Subscription = {
  /** Unique identifier for the subscription */
  subscriptionId: string;

  /** Which Account made this purchase */
  accountId: string; // FK to Account

  /** Which Plan was bought */
  planId: string; // FK to Plan

  /** When the subscription started */
  purchaseDate: Date;

  /** When the subscription ends (computed: Purchase Date + Plan.Duration) */
  endsOn: Date;

  /** Current status of the subscription */
  status: SubscriptionStatus;

  /** Payment reference number */
  receiptNumber: string;

  /** Payment method used for this subscription */
  paymentMethod: PaymentMethod;

  /** Total amount paid (Plan price + any Add On fees) */
  totalAmount: {
    currency: string;
    amount: number;
  };

  /** How many extras were selected (derived) */
  addOnCount: number;

  /** List of Add On IDs that were purchased with this subscription */
  selectedAddOnIds: string[];
};
