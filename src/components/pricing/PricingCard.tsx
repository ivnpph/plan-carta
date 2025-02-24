
import { motion } from "framer-motion";
import { FeatureList } from "./FeatureList";
import { UserSelector } from "./UserSelector";

interface PricingCardProps {
  title: string;
  price: number;
  period: "month" | "year";
  features: string[];
  isPopular?: boolean;
  userCount: number;
  onUserCountChange: (count: number) => void;
}

export const PricingCard = ({
  title,
  price,
  period,
  features,
  isPopular,
  userCount,
  onUserCountChange,
}: PricingCardProps) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(price * userCount);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`pricing-card rounded-2xl p-6 ${
        isPopular
          ? "glass-card ring-2 ring-accent"
          : "bg-white border border-gray-200"
      }`}
    >
      {isPopular && (
        <span className="px-3 py-1 text-xs font-medium text-accent bg-accent-light rounded-full">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <div className="mt-4 flex items-baseline">
        <span className="text-4xl font-bold">{formattedPrice}</span>
        <span className="ml-2 text-gray-500">/{period}</span>
      </div>
      <UserSelector userCount={userCount} onChange={onUserCountChange} />
      <FeatureList features={features} />
      <button
        className={`w-full mt-8 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
          isPopular
            ? "bg-accent text-white hover:bg-accent-dark"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        Get Started
      </button>
    </motion.div>
  );
};
