
import { Minus, Plus } from "lucide-react";

interface UserSelectorProps {
  userCount: number;
  onChange: (count: number) => void;
  min?: number;
  max?: number;
}

export const UserSelector = ({
  userCount,
  onChange,
  min = 1,
  max = 100,
}: UserSelectorProps) => {
  const handleDecrement = () => {
    if (userCount > min) {
      onChange(userCount - 1);
    }
  };

  const handleIncrement = () => {
    if (userCount < max) {
      onChange(userCount + 1);
    }
  };

  return (
    <div className="flex items-center space-x-4 mt-4">
      <button
        onClick={handleDecrement}
        disabled={userCount <= min}
        className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Minus className="w-4 h-4" />
      </button>
      <span className="text-lg font-medium min-w-[3ch] text-center">
        {userCount}
      </span>
      <button
        onClick={handleIncrement}
        disabled={userCount >= max}
        className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
};
