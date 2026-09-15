import React from 'react';
import { PixelIcon } from './PixelIcon';

interface SmartNudgeProps {
  baseItemName: string;
  onUpgradeToCombo: () => void;
  onDismiss: () => void;
}

export const SmartNudge: React.FC<SmartNudgeProps> = ({
  baseItemName,
  onUpgradeToCombo,
  onDismiss
}) => {
  return (
    <div className="bg-[#FFFFFF] border-2 border-[#B5562D] rounded-xl p-3 shadow-sm flex items-center justify-between gap-3 text-xs">
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-lg bg-[#B5562D] text-white flex items-center justify-center shrink-0 shadow-2xs">
          <PixelIcon name="sparkle" size={13} />
        </div>
        <div>
          <p className="font-udupi-display font-bold text-[#2C1810]">
            Upgrade {baseItemName} to Udupi Raja Combo?
          </p>
          <p className="text-[11px] text-[#665044] font-mono-chit">
            Bundle with Chutney + Sambar + Filter Kaapi & save ₹55!
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={onUpgradeToCombo}
          className="btn-sambar-cta font-bold text-[11px] px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-2xs"
        >
          <span>Upgrade</span>
          <PixelIcon name="arrow-right" size={11} />
        </button>
        <button
          onClick={onDismiss}
          className="text-[11px] text-[#7A6456] hover:text-[#2C1810] px-1.5 font-mono-chit"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};
