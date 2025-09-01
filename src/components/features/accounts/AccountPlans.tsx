// components/AccountPlans.tsx
"use client";

import { useState, useEffect } from "react";
import PlanCard from "@/components/features/accounts/PlanCard";
import Image from "next/image";
import { SubscriptionsData } from "@/data/SubscriptionsData";
import { PlansData } from "@/data/PlansData";
import { AddOnsData } from "@/data/AddOnsData";
import { Subscription, Plan, AddOn } from "@/types/entities";

interface AccountPlansProps {
  accountId?: string;
}

interface SubscriptionWithDetails extends Subscription {
  plan: Plan;
  addOns: AddOn[];
}

export default function AccountPlans({ accountId = "0" }: AccountPlansProps) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [subscriptionsWithDetails, setSubscriptionsWithDetails] = useState<
    SubscriptionWithDetails[]
  >([]);

  // Fetch and combine subscription data with plan and addon details
  useEffect(() => {
    const accountSubscriptions = SubscriptionsData.filter(
      (sub) => sub.accountId === accountId
    );

    const enrichedSubscriptions: SubscriptionWithDetails[] =
      accountSubscriptions.map((subscription) => {
        const plan = PlansData.find((p) => p.planId === subscription.planId)!;
        const addOns = AddOnsData.filter((addon) =>
          subscription.selectedAddOnIds.includes(addon.addOnId)
        );

        return {
          ...subscription,
          plan,
          addOns,
        };
      });

    setSubscriptionsWithDetails(enrichedSubscriptions);
  }, [accountId]);

  const selectedSubscription = subscriptionsWithDetails[selectedIdx];

  if (subscriptionsWithDetails.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <p className="text-gray-500">
          No subscriptions found for this account.
        </p>
      </div>
    );
  }

  return (
    <div className="flex bg-white rounded-[11px] max-w-[1149px] mx-auto">
      <div className="flex-1 px-[24px] pt-[22px] pb-[25px]">
        <p className="mb-[17px] w-[151px] border-1 border-[#E4E4E4] pt-[8px] pb-[10px] pl-[14px] rounded-[11px] text-[#6E6E6E]">
          All plans
        </p>
        <div className="overflow-y-auto">
          {subscriptionsWithDetails.map((subscription, i) => (
            <div
              key={subscription.subscriptionId}
              onClick={() => setSelectedIdx(i)}
              className={`cursor-pointer rounded-lg transition-colors ${
                selectedIdx === i ? "bg-gray-100" : ""
              }`}
            >
              <PlanCard
                subscription={subscription}
                plan={subscription.plan}
                isSelected={selectedIdx === i}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Vertical divider */}
      <div className="w-px bg-[#E2E2E2]"></div>

      <div className="flex-1 pt-[33px] px-[24px] overflow-auto">
        <h2 className="text-[25px] font-bold mb-2 text-[#747474] text-center">
          <span className="text-[#00A4B6]">
            {selectedSubscription.plan.name} —
          </span>{" "}
          {selectedSubscription.plan.duration === 12
            ? "Annual"
            : selectedSubscription.plan.duration === 6
            ? "6 months"
            : selectedSubscription.plan.duration === 3
            ? "3 months"
            : `${selectedSubscription.plan.duration} months`}
        </h2>
        <div className="flex items-center justify-center text-[13px] text-[#4F4F4F]">
          <p>
            {selectedSubscription.purchaseDate.toLocaleDateString()} &nbsp;
            &nbsp;|
          </p>
          <div className="ml-[15px] mr-[5.5px]">
            <Image
              src="/icons/plans/mastercard.svg"
              alt="Credit Card"
              width={24}
              height={16}
            />
          </div>
          <p>ending in {selectedSubscription.paymentMethod.lastFourDigits} </p>
        </div>
        <p className="text-[13px] text-[#4F4F4F] mt-[26px] text-center">
          Receipt # {selectedSubscription.receiptNumber}
        </p>
        <div className="bg-[#FAFAFA] mb-[12.5px] px-6 pt-[33px] pb-[22px] rounded-[11px] text-[13px] text-[#515151]">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Alist {selectedSubscription.plan.name} Subscription</span>
              <span>
                {selectedSubscription.plan.basePrice.currency}{" "}
                {selectedSubscription.plan.basePrice.amount.toLocaleString()}
              </span>
            </div>
            {selectedSubscription.addOns.length > 0 && (
              <div className="flex justify-between items-center">
                <span>Add-ons</span>
                <span>
                  {selectedSubscription.addOns
                    .reduce((sum, addon) => sum + addon.price.amount, 0)
                    .toLocaleString()}
                </span>
              </div>
            )}
            {selectedSubscription.addOns.map((addon) => (
              <div
                key={addon.addOnId}
                className="flex justify-between items-center"
              >
                <span>{addon.name}</span>
                <span>
                  {addon.price.currency} {addon.price.amount.toLocaleString()}
                </span>
              </div>
            ))}

            <hr className="border-t border-gray-200 my-4" />

            <div className="flex justify-between items-center font-semibold">
              <span>Total</span>
              <span>
                {selectedSubscription.totalAmount.currency}{" "}
                {selectedSubscription.totalAmount.amount.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center text-[13px] text-[#4F4F4F]">
          <p>
            Status:{" "}
            <span className="text-[#00A4B6]">
              {selectedSubscription.status}
            </span>
          </p>
          <p>Ends on: {selectedSubscription.endsOn.toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
