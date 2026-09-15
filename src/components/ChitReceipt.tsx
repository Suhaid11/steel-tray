import React from 'react';
import { TrayLine, PickupSlot } from '../types';
import { Odometer } from './Odometer';
import { PixelIcon } from './PixelIcon';

interface ChitReceiptProps {
  lines: TrayLine[];
  subtotal: number;
  totalSavings: number;
  selectedSlot: PickupSlot | null;
  onOpenSlotPicker: () => void;
  onReserve: () => void;
  tokenNumber?: string;
  isBudgetExceeded?: boolean;
}

export const ChitReceipt: React.FC<ChitReceiptProps> = ({
  lines,
  subtotal,
  totalSavings,
  selectedSlot,
  onOpenSlotPicker,
  onReserve,
  tokenNumber = '#042',
  isBudgetExceeded = false
}) => {
  const gst = Math.round(subtotal * 0.05); // 5% composition GST
  const grandTotal = subtotal + gst;

  const currentDate = new Date().toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  return (
    <div className="relative w-full max-w-[540px] mx-auto mt-5">
      {/* Authentic Thermal Paper Chit with serrated tear edges */}
      <div className="relative bg-[#FAF6EE] border-x border-[#D8C7B2] shadow-xl p-5 sm:p-6 text-[#2C1810] font-mono-chit text-xs thermal-serrated-top thermal-serrated-bottom rounded-xs">
        
        {/* Top Header: POS Till Header with Dot-Matrix Logo */}
        <div className="text-center pb-3 border-b-2 border-dashed border-[#C5B49F]">
          <div className="flex items-center justify-center gap-1.5 text-[#B5562D] font-bold tracking-widest text-[11px]">
            <PixelIcon name="printer" size={13} />
            <span>ಕೌಂಟರ್ ರಶೀದಿ • THERMAL POS CHIT</span>
          </div>

          <h3 className="font-udupi-display text-xl font-black text-[#2C1810] tracking-tight mt-0.5">
            STEEL TRAY DARSHINI
          </h3>
          <p className="text-[10px] text-[#6E574B] tracking-wider uppercase mt-0.5">
            Car Street, Near Krishna Matha • Udupi 576101
          </p>

          <div className="flex items-center justify-between text-[10px] text-[#6E574B] pt-2 mt-2 border-t border-[#E3D3C1]">
            <span>DATE: {currentDate}</span>
            <span className="font-bold text-[#B5562D] text-xs">TOKEN {tokenNumber}</span>
            <span>SLIP #9842</span>
          </div>
        </div>

        {/* Monospace Line Item Breakdown */}
        <div className="py-3 border-b-2 border-dashed border-[#C5B49F] space-y-2">
          <div className="flex items-center justify-between text-[10px] text-[#7A6456] font-bold pb-1 border-b border-[#E3D3C1]">
            <span className="w-8">QTY</span>
            <span className="flex-1 text-left px-1">ITEM DESCRIPTION</span>
            <span className="w-16 text-right">AMOUNT</span>
          </div>

          {lines.map((line) => (
            <div key={line.id} className="text-[11px] leading-snug">
              <div className="flex items-baseline justify-between">
                <span className="w-8 font-bold text-[#5F473A]">
                  {line.quantity}x
                </span>
                <span className="flex-1 text-left px-1 truncate font-semibold text-[#2C1810]">
                  {line.name}
                </span>
                <span className="w-16 text-right font-bold text-[#2C1810]">
                  ₹{line.lineTotal}
                </span>
              </div>

              {/* Nested combo breakdown if line is combo */}
              {line.comboSelection && (
                <div className="pl-8 text-[9px] text-[#7A6456] mt-0.5 space-y-0.5">
                  <p className="truncate">↳ {line.comboSelection.base.name}</p>
                  <p className="truncate">↳ {line.comboSelection.chutney.name} • {line.comboSelection.side.name}</p>
                  <p className="truncate">↳ {line.comboSelection.drink.name}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Financials & Savings */}
        <div className="py-3 border-b-2 border-dashed border-[#C5B49F] space-y-1.5 text-xs">
          <div className="flex justify-between text-[#6E574B]">
            <span>ITEM SUBTOTAL</span>
            <span className="font-bold text-[#2C1810]">₹{subtotal}</span>
          </div>

          {totalSavings > 0 && (
            <div className="flex justify-between text-[#295A24] font-bold text-[11px] bg-[#EDF5EB] border border-[#C6DEC2] px-2 py-0.5 rounded">
              <span className="flex items-center gap-1">
                <PixelIcon name="coin" size={11} />
                COMBO SAVINGS APPLIED
              </span>
              <span>-₹{totalSavings}</span>
            </div>
          )}

          <div className="flex justify-between text-[#7A6456] text-[10px]">
            <span>GST (5% COMPOSITION DARSHINI)</span>
            <span>₹{gst}</span>
          </div>

          <div className="flex justify-between items-baseline pt-2 border-t border-[#E3D3C1] text-sm font-bold text-[#2C1810]">
            <span className="font-udupi-display tracking-wide font-black">GRAND TOTAL</span>
            <Odometer value={grandTotal} className="text-base text-[#B5562D]" />
          </div>
        </div>

        {/* Pickup Time Slot Section */}
        <div className="pt-3 pb-2">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] uppercase tracking-wider text-[#6E574B] flex items-center gap-1 font-bold">
              <PixelIcon name="clock" size={12} className="text-[#B5562D]" />
              PICKUP TIME SLOT (ನಿಗದಿಪಡಿಸಿದ ಸಮಯ)
            </span>

            <button
              onClick={onOpenSlotPicker}
              className="text-[10px] text-[#B5562D] hover:underline font-bold"
            >
              {selectedSlot ? 'Change Slot' : 'Select Slot'}
            </button>
          </div>

          {selectedSlot ? (
            <div 
              onClick={onOpenSlotPicker}
              className="bg-[#F0E6D8] border border-[#D5C4AF] rounded-xl p-2.5 flex items-center gap-2.5 cursor-pointer hover:bg-[#EAE0D1] transition-colors"
            >
              <div className="px-2.5 py-1 rounded-lg bg-[#B5562D] text-white flex items-center justify-center font-bold text-xs font-mono-chit shadow-2xs shrink-0">
                {selectedSlot.time.split(' ')[0]}
              </div>
              <p className="text-xs text-[#2C1810] font-medium truncate">
                <span className="font-bold text-[#295A24]">Confirmed</span>
                <span className="text-[#6E574B]"> · {selectedSlot.capacity - selectedSlot.taken} counter {selectedSlot.capacity - selectedSlot.taken === 1 ? 'token' : 'tokens'} remaining</span>
              </p>
            </div>
          ) : (
            <button
              onClick={onOpenSlotPicker}
              className="w-full py-2.5 border-2 border-dashed border-[#B5562D]/60 hover:border-[#B5562D] bg-[#FFF9F3] text-[#B5562D] rounded-xl text-center font-bold text-xs flex items-center justify-center gap-2 transition-all"
            >
              <PixelIcon name="clock" size={13} />
              <span>Choose your 15-minute pickup slot</span>
            </button>
          )}
        </div>

        {/* Budget warning if budget mode is active */}
        {isBudgetExceeded && (
          <div className="mt-2 bg-[#FDEFEB] border border-[#B5562D] rounded-lg p-2 text-[10px] text-[#B5562D] font-bold flex items-center gap-1.5">
            <PixelIcon name="alert" size={12} />
            <span>Note: This platter exceeds your target spend limit!</span>
          </div>
        )}

        {/* Action Button: Reserve for Pickup (Terracotta CTA) */}
        <div className="mt-4 pt-3 border-t-2 border-dashed border-[#C5B49F]">
          <button
            onClick={onReserve}
            disabled={!selectedSlot || lines.length === 0}
            className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm shadow-sm flex items-center justify-center gap-2 transition-all ${
              !selectedSlot || lines.length === 0
                ? 'bg-[#E5DACE] text-[#9A8778] cursor-not-allowed shadow-none'
                : 'btn-sambar-cta text-white active:scale-98'
            }`}
          >
            <span>Reserve for Pickup ({selectedSlot ? selectedSlot.time : 'Pick Slot'})</span>
            <PixelIcon name="arrow-right" size={14} />
          </button>

          <p className="text-center text-[9px] text-[#7A6456] mt-2 tracking-wide">
            DELIVERY AGAINST TOKEN ONLY • PIPING HOT TAWA GUARANTEE
          </p>

          {/* Simulated Barcode */}
          <div className="mt-3 pt-2 border-t border-[#E3D3C1] flex flex-col items-center">
            <div className="h-6 w-48 flex items-stretch gap-[2px] opacity-75">
              {[2,1,3,1,2,4,1,2,1,3,2,1,4,1,2,1,3,1,2,3,1,2,4,1,2].map((w, i) => (
                <div 
                  key={i} 
                  className="bg-[#2C1810]" 
                  style={{ width: `${w * 2}px` }} 
                />
              ))}
            </div>
            <span className="text-[8px] text-[#8C7668] tracking-widest mt-0.5">
              * 0 4 2 - 9 8 4 2 - U D P *
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
