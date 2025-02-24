
import { useState } from "react";

interface BillingToggleProps {
  onChange: (isAnnual: boolean) => void;
}

export const BillingToggle = ({ onChange }: BillingToggleProps) => {
  const [isAnnual, setIsAnnual] = useState(false);

  const handleToggle = () => {
    const newValue = !isAnnual;
    setIsAnnual(newValue);
    onChange(newValue);
  };

  return (
    <div className="flex items-center justify-center space-x-4 mb-8">
      <span className={`${!isAnnual ? "text-gray-900" : "text-gray-500"}`}>
        Monthly
      </span>
      <button
        onClick={handleToggle}
        className="relative w-14 h-7 rounded-full bg-accent transition-colors duration-200 ease-in-out"
      >
        <span
          className={`absolute left-1 top-1 w-5 h-5 rounded-full bg-white transform transition-transform duration-200 ease-in-out ${
            isAnnual ? "translate-x-7" : ""
          }`}
        />
      </button>
      <div className="flex items-center space-x-2">
        <span className={`${isAnnual ? "text-gray-900" : "text-gray-500"}`}>
          Annual
        </span>
        <span className="text-sm text-accent-dark font-medium px-2 py-1 rounded-full bg-accent-light">
          Save 20%
        </span>
      </div>
    </div>
  );
};
