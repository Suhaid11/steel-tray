import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PickupSlot } from '../types';
import { PixelIcon } from './PixelIcon';
import { X, CheckCircle2 } from 'lucide-react';

interface PickupSlotPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  slots: PickupSlot[];
  selectedSlot: PickupSlot | null;
  onSelectSlot: (slot: PickupSlot) => void;
}

export const PickupSlotPickerModal: React.FC<PickupSlotPickerModalProps> = ({
  isOpen,
  onClose,
  slots,
  selectedSlot,
  onSelectSlot
}) => {
  const [activeSlot, setActiveSlot] = useState<PickupSlot | null>(selectedSlot || slots[0]);
  const [timeLeft, setTimeLeft] = useState<string>('');

  useEffect(() => {
    if (!activeSlot) return;

    const updateCountdown = () => {
      const now = Date.now();
      const diff = activeSlot.targetTimeMs - now;

      if (diff <= 0) {
        setTimeLeft('Slot ready now! Tawa hot.');
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const mins = Math.floor((totalSeconds % 3600) / 60);
      const secs = totalSeconds % 60;

      if (hours > 0) {
        setTimeLeft(`${hours}h ${mins}m ${secs < 10 ? '0' : ''}${secs}s`);
      } else {
        setTimeLeft(`${mins}m ${secs < 10 ? '0' : ''}${secs}s`);
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [activeSlot]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#2C1810]/60 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          className="relative w-full max-w-xl bg-[#FAF5EC] rounded-2xl sm:rounded-3xl border-2 border-[#D5C4B0] shadow-2xl overflow-hidden flex flex-col z-10 text-[#2C1810]"
        >
          {/* Header */}
          <div className="bg-[#F3E7D6] px-5 py-4 flex items-center justify-between border-b-2 border-[#DECBB6]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FAF4EA] border border-[#D5C4B0] flex items-center justify-center text-[#B5562D]">
                <PixelIcon name="clock" size={16} />
              </div>
              <div>
                <span className="font-mono-chit text-[10px] tracking-wider uppercase text-[#6E574B]">
                  ಸಮಯ ನಿಗದಿ • 15-MIN TIMED SLOTS
                </span>
                <h2 className="font-udupi-display text-lg sm:text-xl font-bold text-[#2C1810]">
                  Reserve Pickup Window
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#EADDC9] hover:bg-[#DECDB5] text-[#5C463A] flex items-center justify-center transition-colors border border-[#D5C4B0]"
            >
              <X size={16} />
            </button>
          </div>

          {/* Context Banner */}
          <div className="bg-[#FAF0E1] px-5 py-3 border-b border-[#DFCBB5] text-xs text-[#6E574B] flex items-start gap-2.5">
            <PixelIcon name="flame" size={15} className="text-[#B5562D] shrink-0 mt-0.5" />
            <p>
              Udupi tiffins are cast-iron tawa dishes. We fire your Neer Dosa and Goli Baje precisely 4 minutes before your window so your tray is served steaming hot at the counter.
            </p>
          </div>

          {/* Slot Grid */}
          <div className="p-5 overflow-y-auto max-h-[50vh] space-y-3 bg-[#FAF5EC]">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {slots.map((slot) => {
                const isFull = slot.taken >= slot.capacity;
                const isSelected = activeSlot?.id === slot.id;
                const spotsLeft = slot.capacity - slot.taken;

                return (
                  <button
                    key={slot.id}
                    disabled={isFull}
                    onClick={() => setActiveSlot(slot)}
                    className={`relative p-3 rounded-xl text-center transition-all border flex flex-col items-center justify-between min-h-[92px] ${
                      isFull
                        ? 'bg-[#EFE6D8] border-[#D9C8B2] text-[#9A8778] cursor-not-allowed opacity-50'
                        : isSelected
                        ? 'bg-[#FFFFFF] border-[#B5562D] ring-2 ring-[#B5562D]/30 shadow-xs'
                        : 'bg-[#F6EFE3] border-[#DECBB6] hover:border-[#B5562D]/60 hover:bg-[#FFFFFF]'
                    }`}
                  >
                    {isSelected && (
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#B5562D] text-white flex items-center justify-center shadow-2xs">
                        <CheckCircle2 size={12} />
                      </span>
                    )}

                    <span className="font-udupi-display text-base font-bold text-[#2C1810] leading-none mt-1">
                      {slot.time}
                    </span>

                    {/* Capacity Indicator */}
                    <div className="mt-2 w-full font-mono-chit">
                      {isFull ? (
                        <span className="inline-block text-[9px] font-bold uppercase bg-[#E8DDCF] text-[#8C7A6D] px-1.5 py-0.5 rounded w-full border border-[#D5C4B0]">
                          FULL • ಮುಗಿದಿದೆ
                        </span>
                      ) : slot.isFillingFast || spotsLeft <= 2 ? (
                        <span className="inline-block text-[9px] font-bold bg-[#FDF0EB] text-[#B5562D] border border-[#E8A88B] px-1.5 py-0.5 rounded w-full">
                          ⚡ {spotsLeft} left!
                        </span>
                      ) : (
                        <span className="inline-block text-[9px] text-[#295A24] bg-[#EDF5EB] border border-[#C6DEC2] px-1.5 py-0.5 rounded w-full">
                          {spotsLeft} open
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Slot Live Countdown Panel */}
          {activeSlot && (
            <div className="bg-[#F3E7D6] border-t border-[#DECBB6] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#D5C4B0] text-[#2C1810] flex flex-col items-center justify-center font-mono-chit font-bold shadow-inner">
                  <span className="text-[8px] text-[#7A6456] leading-none">SLOT</span>
                  <span className="text-xs text-[#B5562D]">{activeSlot.time.split(' ')[0]}</span>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono-chit text-[11px] text-[#6E574B] uppercase font-bold">
                      COUNTDOWN TO TAWA PICKUP:
                    </span>
                    <span className="font-mono-chit text-xs font-bold text-[#B5562D] bg-[#FFFFFF] px-2 py-0.5 rounded border border-[#DFCBB5]">
                      {timeLeft}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#6E574B] mt-0.5 font-mono-chit">
                    Order token will be generated for counter pickup at {activeSlot.time}.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Footer CTA */}
          <div className="bg-[#EFE3D0] p-4 border-t border-[#DECBB6] flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-bold text-[#6E574B] hover:text-[#2C1810] transition-colors"
            >
              Cancel
            </button>

            <button
              onClick={() => {
                if (activeSlot) {
                  onSelectSlot(activeSlot);
                  onClose();
                }
              }}
              disabled={!activeSlot}
              className="btn-sambar-cta font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-md transition-all active:scale-95"
            >
              Confirm {activeSlot?.time} Slot
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
