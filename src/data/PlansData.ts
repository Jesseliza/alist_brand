import { Plan, PlanDuration } from "@/types/entities";

export const PlansData: Plan[] = [
  {
    planId: "plan_enterprise_annual",
    name: "Enterprise",
    duration: PlanDuration.ONE_YEAR,
    basePrice: {
      currency: "AED",
      amount: 425191,
    },
    tierDescription:
      "Complete solution for large businesses with advanced features",
    availableAddOnIds: [
      "addon_content_usage",
      "addon_pre_select_creators",
      "addon_priority_pass",
      "addon_analytics_plus",
      "addon_custom_reporting",
    ],
  },
  {
    planId: "plan_essential_3months",
    name: "Essential",
    duration: PlanDuration.THREE_MONTHS,
    basePrice: {
      currency: "AED",
      amount: 49591,
    },
    tierDescription: "Perfect for small businesses getting started",
    availableAddOnIds: ["addon_content_usage", "addon_pre_select_creators"],
  },
  {
    planId: "plan_premium_6months",
    name: "Premium",
    duration: PlanDuration.SIX_MONTHS,
    basePrice: {
      currency: "AED",
      amount: 49591,
    },
    tierDescription: "Enhanced features for growing businesses",
    availableAddOnIds: [
      "addon_content_usage",
      "addon_pre_select_creators",
      "addon_priority_pass",
    ],
  },
  {
    planId: "plan_pro_3months",
    name: "Pro",
    duration: PlanDuration.THREE_MONTHS,
    basePrice: {
      currency: "AED",
      amount: 49591,
    },
    tierDescription: "Professional features for established businesses",
    availableAddOnIds: [
      "addon_content_usage",
      "addon_pre_select_creators",
      "addon_priority_pass",
      "addon_analytics_plus",
    ],
  },
  {
    planId: "plan_essential_annual",
    name: "Essential",
    duration: PlanDuration.ONE_YEAR,
    basePrice: {
      currency: "AED",
      amount: 49591,
    },
    tierDescription: "Annual Essential plan with cost savings",
    availableAddOnIds: ["addon_content_usage", "addon_pre_select_creators"],
  },
];
