import { Subscription, SubscriptionStatus } from "@/types/entities";

export const SubscriptionsData: Subscription[] = [
  // Account 0 - Bianca Williams (existing subscriptions)
  {
    subscriptionId: "sub_enterprise_001",
    accountId: "0",
    planId: "plan_enterprise_annual",
    purchaseDate: new Date("2024-01-06"),
    endsOn: new Date("2025-01-06"),
    status: SubscriptionStatus.USED,
    receiptNumber: "5834582",
    paymentMethod: {
      type: "Mastercard",
      lastFourDigits: "5085",
      maskedNumber: "**** **** **** 5085",
    },
    totalAmount: {
      currency: "AED",
      amount: 431988,
    },
    addOnCount: 3,
    selectedAddOnIds: [
      "addon_content_usage",
      "addon_pre_select_creators",
      "addon_priority_pass",
    ],
  },
  {
    subscriptionId: "sub_essential_001",
    accountId: "0",
    planId: "plan_essential_3months",
    purchaseDate: new Date("2024-04-06"),
    endsOn: new Date("2024-07-06"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834583",
    paymentMethod: {
      type: "Visa",
      lastFourDigits: "1234",
      maskedNumber: "**** **** **** 1234",
    },
    totalAmount: {
      currency: "AED",
      amount: 49591,
    },
    addOnCount: 2,
    selectedAddOnIds: ["addon_content_usage", "addon_pre_select_creators"],
  },
  {
    subscriptionId: "sub_premium_001",
    accountId: "0",
    planId: "plan_premium_6months",
    purchaseDate: new Date("2024-04-06"),
    endsOn: new Date("2024-10-06"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834584",
    paymentMethod: {
      type: "Mastercard",
      lastFourDigits: "5085",
      maskedNumber: "**** **** **** 5085",
    },
    totalAmount: {
      currency: "AED",
      amount: 49591,
    },
    addOnCount: 0,
    selectedAddOnIds: [],
  },
  {
    subscriptionId: "sub_pro_001",
    accountId: "0",
    planId: "plan_pro_3months",
    purchaseDate: new Date("2024-04-06"),
    endsOn: new Date("2024-07-06"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834585",
    paymentMethod: {
      type: "Visa",
      lastFourDigits: "1234",
      maskedNumber: "**** **** **** 1234",
    },
    totalAmount: {
      currency: "AED",
      amount: 49591,
    },
    addOnCount: 0,
    selectedAddOnIds: [],
  },
  {
    subscriptionId: "sub_pro_002",
    accountId: "0",
    planId: "plan_pro_3months",
    purchaseDate: new Date("2024-04-06"),
    endsOn: new Date("2024-07-06"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834586",
    paymentMethod: {
      type: "Mastercard",
      lastFourDigits: "5085",
      maskedNumber: "**** **** **** 5085",
    },
    totalAmount: {
      currency: "AED",
      amount: 49591,
    },
    addOnCount: 0,
    selectedAddOnIds: [],
  },
  {
    subscriptionId: "sub_essential_annual_001",
    accountId: "0",
    planId: "plan_essential_annual",
    purchaseDate: new Date("2024-01-06"),
    endsOn: new Date("2025-01-06"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834587",
    paymentMethod: {
      type: "Visa",
      lastFourDigits: "1234",
      maskedNumber: "**** **** **** 1234",
    },
    totalAmount: {
      currency: "AED",
      amount: 49591,
    },
    addOnCount: 0,
    selectedAddOnIds: [],
  },

  // Account 1 - Mason Wilson
  {
    subscriptionId: "sub_essential_002",
    accountId: "1",
    planId: "plan_essential_3months",
    purchaseDate: new Date("2024-03-15"),
    endsOn: new Date("2024-06-15"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834588",
    paymentMethod: {
      type: "Visa",
      lastFourDigits: "5678",
      maskedNumber: "**** **** **** 5678",
    },
    totalAmount: {
      currency: "AED",
      amount: 49591,
    },
    addOnCount: 1,
    selectedAddOnIds: ["addon_content_usage"],
  },

  // Account 2 - Lucas Thompson
  {
    subscriptionId: "sub_premium_002",
    accountId: "2",
    planId: "plan_premium_6months",
    purchaseDate: new Date("2024-02-20"),
    endsOn: new Date("2024-08-20"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834589",
    paymentMethod: {
      type: "Mastercard",
      lastFourDigits: "9012",
      maskedNumber: "**** **** **** 9012",
    },
    totalAmount: {
      currency: "AED",
      amount: 49591,
    },
    addOnCount: 2,
    selectedAddOnIds: ["addon_content_usage", "addon_pre_select_creators"],
  },

  // Account 3 - Ethan Miller
  {
    subscriptionId: "sub_pro_003",
    accountId: "3",
    planId: "plan_pro_3months",
    purchaseDate: new Date("2024-01-10"),
    endsOn: new Date("2024-04-10"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834590",
    paymentMethod: {
      type: "Visa",
      lastFourDigits: "3456",
      maskedNumber: "**** **** **** 3456",
    },
    totalAmount: {
      currency: "AED",
      amount: 49591,
    },
    addOnCount: 0,
    selectedAddOnIds: [],
  },

  // Account 4 - Clara Johnson
  {
    subscriptionId: "sub_essential_003",
    accountId: "4",
    planId: "plan_essential_annual",
    purchaseDate: new Date("2024-01-05"),
    endsOn: new Date("2025-01-05"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834591",
    paymentMethod: {
      type: "Mastercard",
      lastFourDigits: "7890",
      maskedNumber: "**** **** **** 7890",
    },
    totalAmount: {
      currency: "AED",
      amount: 49591,
    },
    addOnCount: 1,
    selectedAddOnIds: ["addon_pre_select_creators"],
  },

  // Account 5 - Henry Young
  {
    subscriptionId: "sub_essential_004",
    accountId: "5",
    planId: "plan_essential_3months",
    purchaseDate: new Date("2024-02-01"),
    endsOn: new Date("2024-05-01"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834592",
    paymentMethod: {
      type: "Visa",
      lastFourDigits: "1234",
      maskedNumber: "**** **** **** 1234",
    },
    totalAmount: {
      currency: "AED",
      amount: 49591,
    },
    addOnCount: 0,
    selectedAddOnIds: [],
  },

  // Account 6 - Pulse Marketing Group
  {
    subscriptionId: "sub_enterprise_002",
    accountId: "6",
    planId: "plan_enterprise_annual",
    purchaseDate: new Date("2024-01-01"),
    endsOn: new Date("2025-01-01"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834593",
    paymentMethod: {
      type: "Mastercard",
      lastFourDigits: "5555",
      maskedNumber: "**** **** **** 5555",
    },
    totalAmount: {
      currency: "AED",
      amount: 431988,
    },
    addOnCount: 4,
    selectedAddOnIds: [
      "addon_content_usage",
      "addon_pre_select_creators",
      "addon_priority_pass",
      "addon_analytics_plus",
    ],
  },

  // Account 7 - Spark Communications
  {
    subscriptionId: "sub_premium_003",
    accountId: "7",
    planId: "plan_premium_6months",
    purchaseDate: new Date("2024-01-15"),
    endsOn: new Date("2024-07-15"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834594",
    paymentMethod: {
      type: "Visa",
      lastFourDigits: "6666",
      maskedNumber: "**** **** **** 6666",
    },
    totalAmount: {
      currency: "AED",
      amount: 49591,
    },
    addOnCount: 2,
    selectedAddOnIds: ["addon_content_usage", "addon_pre_select_creators"],
  },

  // Account 8 - Momentum
  {
    subscriptionId: "sub_pro_004",
    accountId: "8",
    planId: "plan_pro_3months",
    purchaseDate: new Date("2024-02-10"),
    endsOn: new Date("2024-05-10"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834595",
    paymentMethod: {
      type: "Mastercard",
      lastFourDigits: "7777",
      maskedNumber: "**** **** **** 7777",
    },
    totalAmount: {
      currency: "AED",
      amount: 49591,
    },
    addOnCount: 1,
    selectedAddOnIds: ["addon_priority_pass"],
  },

  // Account 9 - Fusion Strategies
  {
    subscriptionId: "sub_enterprise_003",
    accountId: "9",
    planId: "plan_enterprise_annual",
    purchaseDate: new Date("2024-01-20"),
    endsOn: new Date("2025-01-20"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834596",
    paymentMethod: {
      type: "Visa",
      lastFourDigits: "8888",
      maskedNumber: "**** **** **** 8888",
    },
    totalAmount: {
      currency: "AED",
      amount: 431988,
    },
    addOnCount: 5,
    selectedAddOnIds: [
      "addon_content_usage",
      "addon_pre_select_creators",
      "addon_priority_pass",
      "addon_analytics_plus",
      "addon_custom_reporting",
    ],
  },

  // Account 10 - Bianca Williams 2
  {
    subscriptionId: "sub_premium_004",
    accountId: "10",
    planId: "plan_premium_6months",
    purchaseDate: new Date("2024-01-25"),
    endsOn: new Date("2024-07-25"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834597",
    paymentMethod: {
      type: "Mastercard",
      lastFourDigits: "9999",
      maskedNumber: "**** **** **** 9999",
    },
    totalAmount: {
      currency: "AED",
      amount: 49591,
    },
    addOnCount: 3,
    selectedAddOnIds: [
      "addon_content_usage",
      "addon_pre_select_creators",
      "addon_priority_pass",
    ],
  },

  // Account 11 - Bianca Williams 3
  {
    subscriptionId: "sub_essential_005",
    accountId: "11",
    planId: "plan_essential_3months",
    purchaseDate: new Date("2024-02-05"),
    endsOn: new Date("2024-05-05"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834598",
    paymentMethod: {
      type: "Visa",
      lastFourDigits: "0000",
      maskedNumber: "**** **** **** 0000",
    },
    totalAmount: {
      currency: "AED",
      amount: 49591,
    },
    addOnCount: 1,
    selectedAddOnIds: ["addon_content_usage"],
  },

  // Account 12 - Bianca Williams 4
  {
    subscriptionId: "sub_enterprise_004",
    accountId: "12",
    planId: "plan_enterprise_annual",
    purchaseDate: new Date("2024-01-10"),
    endsOn: new Date("2025-01-10"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834599",
    paymentMethod: {
      type: "Mastercard",
      lastFourDigits: "1111",
      maskedNumber: "**** **** **** 1111",
    },
    totalAmount: {
      currency: "AED",
      amount: 431988,
    },
    addOnCount: 4,
    selectedAddOnIds: [
      "addon_content_usage",
      "addon_pre_select_creators",
      "addon_priority_pass",
      "addon_analytics_plus",
    ],
  },

  // Account 13 - Bianca Williams 5
  {
    subscriptionId: "sub_premium_005",
    accountId: "13",
    planId: "plan_premium_6months",
    purchaseDate: new Date("2024-01-30"),
    endsOn: new Date("2024-07-30"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834600",
    paymentMethod: {
      type: "Visa",
      lastFourDigits: "2222",
      maskedNumber: "**** **** **** 2222",
    },
    totalAmount: {
      currency: "AED",
      amount: 49591,
    },
    addOnCount: 2,
    selectedAddOnIds: ["addon_content_usage", "addon_pre_select_creators"],
  },

  // Account 14 - Bianca Williams 6
  {
    subscriptionId: "sub_enterprise_005",
    accountId: "14",
    planId: "plan_enterprise_annual",
    purchaseDate: new Date("2024-01-15"),
    endsOn: new Date("2025-01-15"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834601",
    paymentMethod: {
      type: "Mastercard",
      lastFourDigits: "3333",
      maskedNumber: "**** **** **** 3333",
    },
    totalAmount: {
      currency: "AED",
      amount: 431988,
    },
    addOnCount: 5,
    selectedAddOnIds: [
      "addon_content_usage",
      "addon_pre_select_creators",
      "addon_priority_pass",
      "addon_analytics_plus",
      "addon_custom_reporting",
    ],
  },

  // Account 15 - Delta Systems
  {
    subscriptionId: "sub_premium_006",
    accountId: "15",
    planId: "plan_premium_6months",
    purchaseDate: new Date("2024-02-01"),
    endsOn: new Date("2024-08-01"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834602",
    paymentMethod: {
      type: "Visa",
      lastFourDigits: "4444",
      maskedNumber: "**** **** **** 4444",
    },
    totalAmount: {
      currency: "AED",
      amount: 49591,
    },
    addOnCount: 3,
    selectedAddOnIds: [
      "addon_content_usage",
      "addon_pre_select_creators",
      "addon_priority_pass",
    ],
  },

  // Account 16 - Epsilon Group
  {
    subscriptionId: "sub_pro_005",
    accountId: "16",
    planId: "plan_pro_3months",
    purchaseDate: new Date("2024-01-20"),
    endsOn: new Date("2024-04-20"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834603",
    paymentMethod: {
      type: "Mastercard",
      lastFourDigits: "5555",
      maskedNumber: "**** **** **** 5555",
    },
    totalAmount: {
      currency: "AED",
      amount: 49591,
    },
    addOnCount: 1,
    selectedAddOnIds: ["addon_content_usage"],
  },

  // Account 17 - Zeta Technologies
  {
    subscriptionId: "sub_enterprise_006",
    accountId: "17",
    planId: "plan_enterprise_annual",
    purchaseDate: new Date("2024-01-01"),
    endsOn: new Date("2025-01-01"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834604",
    paymentMethod: {
      type: "Visa",
      lastFourDigits: "6666",
      maskedNumber: "**** **** **** 6666",
    },
    totalAmount: {
      currency: "AED",
      amount: 431988,
    },
    addOnCount: 4,
    selectedAddOnIds: [
      "addon_content_usage",
      "addon_pre_select_creators",
      "addon_priority_pass",
      "addon_analytics_plus",
    ],
  },

  // Account 18 - TechForward Solutions
  {
    subscriptionId: "sub_essential_006",
    accountId: "18",
    planId: "plan_essential_3months",
    purchaseDate: new Date("2024-02-15"),
    endsOn: new Date("2024-05-15"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834605",
    paymentMethod: {
      type: "Mastercard",
      lastFourDigits: "7777",
      maskedNumber: "**** **** **** 7777",
    },
    totalAmount: {
      currency: "AED",
      amount: 49591,
    },
    addOnCount: 0,
    selectedAddOnIds: [],
  },

  // Account 19 - Green Innovations Inc.
  {
    subscriptionId: "sub_premium_007",
    accountId: "19",
    planId: "plan_premium_6months",
    purchaseDate: new Date("2024-01-25"),
    endsOn: new Date("2024-07-25"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834606",
    paymentMethod: {
      type: "Visa",
      lastFourDigits: "8888",
      maskedNumber: "**** **** **** 8888",
    },
    totalAmount: {
      currency: "AED",
      amount: 49591,
    },
    addOnCount: 2,
    selectedAddOnIds: ["addon_content_usage", "addon_pre_select_creators"],
  },

  // Account 20 - Emily Carter
  {
    subscriptionId: "sub_essential_007",
    accountId: "20",
    planId: "plan_essential_annual",
    purchaseDate: new Date("2024-01-10"),
    endsOn: new Date("2025-01-10"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834607",
    paymentMethod: {
      type: "Mastercard",
      lastFourDigits: "9999",
      maskedNumber: "**** **** **** 9999",
    },
    totalAmount: {
      currency: "AED",
      amount: 49591,
    },
    addOnCount: 1,
    selectedAddOnIds: ["addon_content_usage"],
  },

  // Account 21 - William Davis
  {
    subscriptionId: "sub_pro_006",
    accountId: "21",
    planId: "plan_pro_3months",
    purchaseDate: new Date("2024-02-01"),
    endsOn: new Date("2024-05-01"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834608",
    paymentMethod: {
      type: "Visa",
      lastFourDigits: "0000",
      maskedNumber: "**** **** **** 0000",
    },
    totalAmount: {
      currency: "AED",
      amount: 49591,
    },
    addOnCount: 0,
    selectedAddOnIds: [],
  },

  // Account 22 - United Marketing
  {
    subscriptionId: "sub_premium_008",
    accountId: "22",
    planId: "plan_premium_6months",
    purchaseDate: new Date("2024-01-15"),
    endsOn: new Date("2024-07-15"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834609",
    paymentMethod: {
      type: "Mastercard",
      lastFourDigits: "1111",
      maskedNumber: "**** **** **** 1111",
    },
    totalAmount: {
      currency: "AED",
      amount: 49591,
    },
    addOnCount: 2,
    selectedAddOnIds: ["addon_content_usage", "addon_pre_select_creators"],
  },

  // Account 23 - Apex Solutions
  {
    subscriptionId: "sub_essential_008",
    accountId: "23",
    planId: "plan_essential_3months",
    purchaseDate: new Date("2024-02-10"),
    endsOn: new Date("2024-05-10"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834610",
    paymentMethod: {
      type: "Visa",
      lastFourDigits: "2222",
      maskedNumber: "**** **** **** 2222",
    },
    totalAmount: {
      currency: "AED",
      amount: 49591,
    },
    addOnCount: 1,
    selectedAddOnIds: ["addon_pre_select_creators"],
  },

  // Account 24 - Olivia Brown
  {
    subscriptionId: "sub_pro_007",
    accountId: "24",
    planId: "plan_pro_3months",
    purchaseDate: new Date("2024-01-20"),
    endsOn: new Date("2024-04-20"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834611",
    paymentMethod: {
      type: "Mastercard",
      lastFourDigits: "3333",
      maskedNumber: "**** **** **** 3333",
    },
    totalAmount: {
      currency: "AED",
      amount: 49591,
    },
    addOnCount: 0,
    selectedAddOnIds: [],
  },

  // Account 25 - Noah Garcia
  {
    subscriptionId: "sub_essential_009",
    accountId: "25",
    planId: "plan_essential_annual",
    purchaseDate: new Date("2024-01-05"),
    endsOn: new Date("2025-01-05"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834612",
    paymentMethod: {
      type: "Visa",
      lastFourDigits: "4444",
      maskedNumber: "**** **** **** 4444",
    },
    totalAmount: {
      currency: "AED",
      amount: 49591,
    },
    addOnCount: 0,
    selectedAddOnIds: [],
  },

  // Account 26 - Universal Enterprises
  {
    subscriptionId: "sub_enterprise_007",
    accountId: "26",
    planId: "plan_enterprise_annual",
    purchaseDate: new Date("2024-01-01"),
    endsOn: new Date("2025-01-01"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834613",
    paymentMethod: {
      type: "Mastercard",
      lastFourDigits: "5555",
      maskedNumber: "**** **** **** 5555",
    },
    totalAmount: {
      currency: "AED",
      amount: 431988,
    },
    addOnCount: 3,
    selectedAddOnIds: [
      "addon_content_usage",
      "addon_pre_select_creators",
      "addon_priority_pass",
    ],
  },

  // Account 27 - Prime Innovations
  {
    subscriptionId: "sub_premium_009",
    accountId: "27",
    planId: "plan_premium_6months",
    purchaseDate: new Date("2024-01-10"),
    endsOn: new Date("2024-07-10"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834614",
    paymentMethod: {
      type: "Visa",
      lastFourDigits: "6666",
      maskedNumber: "**** **** **** 6666",
    },
    totalAmount: {
      currency: "AED",
      amount: 49591,
    },
    addOnCount: 2,
    selectedAddOnIds: ["addon_content_usage", "addon_pre_select_creators"],
  },

  // Account 28 - Isabella Rodriguez
  {
    subscriptionId: "sub_essential_010",
    accountId: "28",
    planId: "plan_essential_3months",
    purchaseDate: new Date("2024-02-01"),
    endsOn: new Date("2024-05-01"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834615",
    paymentMethod: {
      type: "Mastercard",
      lastFourDigits: "7777",
      maskedNumber: "**** **** **** 7777",
    },
    totalAmount: {
      currency: "AED",
      amount: 49591,
    },
    addOnCount: 1,
    selectedAddOnIds: ["addon_content_usage"],
  },

  // Account 29 - Mia Martinez
  {
    subscriptionId: "sub_pro_008",
    accountId: "29",
    planId: "plan_pro_3months",
    purchaseDate: new Date("2024-01-15"),
    endsOn: new Date("2024-04-15"),
    status: SubscriptionStatus.ACTIVE,
    receiptNumber: "5834616",
    paymentMethod: {
      type: "Visa",
      lastFourDigits: "8888",
      maskedNumber: "**** **** **** 8888",
    },
    totalAmount: {
      currency: "AED",
      amount: 49591,
    },
    addOnCount: 0,
    selectedAddOnIds: [],
  },
];
