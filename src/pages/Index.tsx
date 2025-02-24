
import { useState } from "react";
import { PricingCard } from "../components/pricing/PricingCard";
import { BillingToggle } from "../components/pricing/BillingToggle";

const MONTHLY_PRICES = {
  essential: 12,
  premium: 24,
  enterprise: 49,
};

const ANNUAL_DISCOUNT = 0.8; // 20% off

const Index = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [userCounts, setUserCounts] = useState({
    essential: 1,
    premium: 1,
    enterprise: 1,
  });

  const handleUserCountChange = (plan: keyof typeof userCounts, count: number) => {
    setUserCounts((prev) => ({ ...prev, [plan]: count }));
  };

  const getPriceWithDiscount = (basePrice: number) => {
    return isAnnual ? Math.floor(basePrice * ANNUAL_DISCOUNT) : basePrice;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 py-16 mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the perfect plan for your needs. All plans include a 14-day free
            trial.
          </p>
        </div>

        <div className="mt-12">
          <BillingToggle onChange={setIsAnnual} />
        </div>

        <div className="grid grid-cols-1 gap-8 mt-12 lg:grid-cols-3">
          <PricingCard
            title="Essential"
            price={getPriceWithDiscount(MONTHLY_PRICES.essential)}
            period={isAnnual ? "year" : "month"}
            features={[
              "Up to 10 projects",
              "Basic analytics",
              "24/7 email support",
              "2 team members",
            ]}
            userCount={userCounts.essential}
            onUserCountChange={(count) =>
              handleUserCountChange("essential", count)
            }
          />
          <PricingCard
            title="Premium"
            price={getPriceWithDiscount(MONTHLY_PRICES.premium)}
            period={isAnnual ? "year" : "month"}
            features={[
              "Unlimited projects",
              "Advanced analytics",
              "Priority support",
              "10 team members",
              "Custom integrations",
            ]}
            isPopular
            userCount={userCounts.premium}
            onUserCountChange={(count) => handleUserCountChange("premium", count)}
          />
          <PricingCard
            title="Enterprise"
            price={getPriceWithDiscount(MONTHLY_PRICES.enterprise)}
            period={isAnnual ? "year" : "month"}
            features={[
              "Unlimited everything",
              "Custom analytics",
              "Dedicated support",
              "Unlimited team members",
              "Advanced security",
              "Custom branding",
            ]}
            userCount={userCounts.enterprise}
            onUserCountChange={(count) =>
              handleUserCountChange("enterprise", count)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
