import { AddOn } from "@/types/entities";

export const AddOnsData: AddOn[] = [
  {
    addOnId: "addon_content_usage",
    name: "Content Usage",
    description: "Enhanced content usage limits and analytics",
    price: {
      currency: "AED",
      amount: 2499,
    },
    compatiblePlanIds: [
      "plan_enterprise_annual",
      "plan_essential_3months",
      "plan_premium_6months",
      "plan_pro_3months",
      "plan_essential_annual",
    ],
    purchasedInSubscriptionIds: ["sub_enterprise_001", "sub_essential_001"],
  },
  {
    addOnId: "addon_pre_select_creators",
    name: "Pre-Select Creators",
    description: "Advanced creator selection and matching tools",
    price: {
      currency: "AED",
      amount: 2299,
    },
    compatiblePlanIds: [
      "plan_enterprise_annual",
      "plan_essential_3months",
      "plan_premium_6months",
      "plan_pro_3months",
      "plan_essential_annual",
    ],
    purchasedInSubscriptionIds: ["sub_enterprise_001", "sub_essential_001"],
  },
  {
    addOnId: "addon_priority_pass",
    name: "Priority Pass",
    description: "Priority support and faster response times",
    price: {
      currency: "AED",
      amount: 1999,
    },
    compatiblePlanIds: [
      "plan_enterprise_annual",
      "plan_premium_6months",
      "plan_pro_3months",
    ],
    purchasedInSubscriptionIds: ["sub_enterprise_001"],
  },
  {
    addOnId: "addon_analytics_plus",
    name: "Analytics Plus",
    description: "Advanced analytics and reporting features",
    price: {
      currency: "AED",
      amount: 3499,
    },
    compatiblePlanIds: ["plan_enterprise_annual", "plan_pro_3months"],
    purchasedInSubscriptionIds: ["sub_enterprise_001"],
  },
  {
    addOnId: "addon_custom_reporting",
    name: "Custom Reporting",
    description: "Custom report generation and data export",
    price: {
      currency: "AED",
      amount: 4999,
    },
    compatiblePlanIds: ["plan_enterprise_annual"],
    purchasedInSubscriptionIds: ["sub_enterprise_001"],
  },
];
