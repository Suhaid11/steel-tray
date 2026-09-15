import React from 'react';
import { PixelIcon } from './PixelIcon';

interface BudgetBarProps {
  currentSpend: number;
  budgetLimit: number | null;
  onSetBudget: (limit: number | null) => void;
}

export const BudgetBar: React.FC<BudgetBarProps> = ({
  currentSpend,
  budgetLimit,
  onSetBudget
}) => {
  const budgetOptions = [200, 350, 500];

  return (
    <div className="bg-[#FAF4EA] rounded-xl p-2.5 border border-[#DECDBA] flex flex-wrap items-center justify-between gap-2 text-xs">
      <div className="flex items-center gap-2">
        <PixelIcon name="coin" size={13} className="text-[#B5562D]" />
        <span className="font-mono-chit text-[11px] font-bold text-[#5F473A] uppercase tracking-wide">
          Spend Cap:
        </span>
      </div>

      <div className="flex items-center gap-1.5 font-mono-chit text-[11px]">
        <button
          onClick={() => onSetBudget(null)}
          className={`px-2.5 py-1 rounded-lg transition-all ${
            budgetLimit === null
              ? 'bg-[#FFFFFF] text-[#B5562D] border border-[#DFCBB5] font-bold shadow-2xs'
              : 'bg-[#EDE2D2] text-[#7A6456] hover:bg-[#E3D5C2] border border-transparent'
          }`}
        >
          No Limit
        </button>

        {budgetOptions.map((opt) => (
          <button
            key={opt}
            onClick={() => onSetBudget(opt)}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              budgetLimit === opt
                ? 'bg-[#B5562D] text-white font-bold shadow-2xs'
                : 'bg-[#EDE2D2] text-[#7A6456] hover:bg-[#E3D5C2] border border-transparent'
            }`}
          >
            ₹{opt}
          </button>
        ))}
      </div>

      {budgetLimit !== null && (
        <div className="w-full flex items-center gap-2 mt-1">
          <div className="flex-1 h-1.5 bg-[#E6D9C8] rounded-full overflow-hidden border border-[#D5C4AE]">
            <div
              className={`h-full transition-all duration-300 ${
                currentSpend > budgetLimit ? 'bg-[#B5562D]' : 'bg-[#295A24]'
              }`}
              style={{ width: `${Math.min(100, (currentSpend / budgetLimit) * 100)}%` }}
            />
          </div>
          <span className="font-mono-chit text-[10px] text-[#7A6456]">
            ₹{currentSpend} / ₹{budgetLimit}
          </span>
        </div>
      )}
    </div>
  );
};
