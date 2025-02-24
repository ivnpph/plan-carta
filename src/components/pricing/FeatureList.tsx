
import { Check } from "lucide-react";

interface FeatureListProps {
  features: string[];
}

export const FeatureList = ({ features }: FeatureListProps) => {
  return (
    <ul className="space-y-4 mt-6">
      {features.map((feature, index) => (
        <li
          key={index}
          className="feature-list-item"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <Check className="w-5 h-5 text-accent" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
};
