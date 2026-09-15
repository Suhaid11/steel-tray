import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { OrderConfirmation } from '../types';
import { PixelIcon } from './PixelIcon';
import { Printer, RotateCcw, MapPin } from 'lucide-react';

interface OrderConfirmationModalProps {
  order: OrderConfirmation | null;
  onClose: () => void;
  onNewOrder: () => void;
}

export const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
  order,
  onClose,
  onNewOrder
}) => {
  const [prepStep, setPrepStep] = useState(1);

  // Simulate realistic counter kitchen progression
  useEffect(() => {
    if (!order) return;
    const t1 = setTimeout(() => setPrepStep(2), 2500);
    const t2 = setTimeout(() => setPrepStep(3), 6000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [order]);

  if (!order) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
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
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg bg-[#FAF5EC] rounded-3xl border-2 border-[#D5C4B0] shadow-2xl overflow-hidden my-auto z-10 text-[#2C1810]"
        >
          {/* Top Bar */}
          <div className="bg-[#F3E7D6] px-6 py-4 flex items-center justify-between border-b-2 border-[#DECBB6]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#FAF5EC] border border-[#D5C4B0] flex items-center justify-center text-[#B5562D]">
                <PixelIcon name="check" size={14} />
              </div>
              <div>
                <span className="font-mono-chit text-[10px] tracking-wider uppercase text-[#6E574B]">
                  ಮೀಸಲಾತಿ ದೃಢೀಕರಣ • TRAY RESERVED
                </span>
                <h3 className="font-udupi-display text-lg font-bold text-[#2C1810]">
                  Counter Token Slip
                </h3>
              </div>
            </div>

            <button
              onClick={handlePrint}
              title="Print Token Slip"
              className="btn-steel-press flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg font-mono-chit font-semibold"
            >
              <Printer size={13} />
              <span>Print Slip</span>
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 space-y-5 bg-[#FAF5EC]">
            {/* Big Token Hero Card */}
            <div className="bg-[#FFFFFF] border-2 border-[#DECBB6] rounded-2xl p-5 text-center relative overflow-hidden shadow-xs">
              <div className="absolute top-2 right-3 text-[10px] font-mono-chit text-[#7A6456] uppercase">
                TAWA TOKEN
              </div>

              <span className="text-[11px] font-mono-chit tracking-widest text-[#B5562D] font-bold uppercase">
                YOUR SERVING NUMBER
              </span>
              <h1 className="font-mono-chit text-4xl sm:text-5xl font-black text-[#2C1810] tracking-tight my-1">
                {order.tokenNumber}
              </h1>
              <p className="font-udupi-display text-sm text-[#6E574B] font-semibold">
                Present this token at the stainless steel delivery window
              </p>

              {/* Slot Badge */}
              <div className="mt-4 pt-3 border-t border-[#EDE1D1] flex items-center justify-center gap-2 text-xs">
                <PixelIcon name="clock" size={14} className="text-[#B5562D]" />
                <span className="text-[#6E574B] font-mono-chit">Reserved Pickup Window:</span>
                <span className="font-mono-chit font-bold text-sm text-[#B5562D] bg-[#F8F2E7] px-2.5 py-0.5 rounded border border-[#DFCBB5]">
                  {order.pickupSlot.time}
                </span>
              </div>
            </div>

            {/* Preparation Live Progress */}
            <div className="bg-[#FFFFFF] rounded-xl p-4 border border-[#DECBB6] shadow-2xs">
              <span className="text-[10px] font-mono-chit uppercase tracking-wider text-[#6E574B] font-bold block mb-2">
                TAWA & KITCHEN STATUS
              </span>

              <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono-chit">
                <div className={`p-2 rounded-lg transition-colors border ${prepStep >= 1 ? 'bg-[#EDF5EB] text-[#295A24] border-[#C6DEC2] font-bold' : 'bg-[#F4ECE0] text-[#7A6456] border-[#DECBB6]'}`}>
                  <p className="text-[9px]">STEP 1</p>
                  <p className="text-[11px] leading-tight mt-0.5">Order Fired</p>
                </div>

                <div className={`p-2 rounded-lg transition-colors border ${prepStep >= 2 ? 'bg-[#EDF5EB] text-[#295A24] border-[#C6DEC2] font-bold' : 'bg-[#F4ECE0] text-[#7A6456] border-[#DECBB6]'}`}>
                  <p className="text-[9px]">STEP 2</p>
                  <p className="text-[11px] leading-tight mt-0.5">Tawa Sizzle</p>
                </div>

                <div className={`p-2 rounded-lg transition-colors border ${prepStep >= 3 ? 'bg-[#EDF5EB] text-[#295A24] border-[#C6DEC2] font-bold' : 'bg-[#F4ECE0] text-[#7A6456] border-[#DECBB6]'}`}>
                  <p className="text-[9px]">STEP 3</p>
                  <p className="text-[11px] leading-tight mt-0.5">Plated on Leaf</p>
                </div>
              </div>
            </div>

            {/* Tray Recap */}
            <div className="bg-[#FFFFFF] rounded-xl p-4 border border-[#DECBB6] font-mono-chit text-xs shadow-2xs">
              <div className="flex justify-between items-center text-[10px] text-[#7A6456] pb-2 border-b border-[#EDE1D1] font-bold">
                <span>RESERVED TRAY ITEMS</span>
                <span>AMOUNT</span>
              </div>

              <div className="py-2 space-y-1.5 max-h-36 overflow-y-auto">
                {order.items.map((line) => (
                  <div key={line.id} className="flex justify-between items-start text-[11px]">
                    <span className="truncate pr-2 text-[#4A3427]">
                      {line.quantity}x {line.name}
                    </span>
                    <span className="font-bold text-[#2C1810] shrink-0">
                      ₹{line.lineTotal}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-[#EDE1D1] flex justify-between items-baseline font-bold text-sm text-[#2C1810]">
                <span>Total Payable at Counter</span>
                <span className="text-[#B5562D] text-base">₹{order.total}</span>
              </div>
            </div>

            {/* Counter Location Micro-info */}
            <div className="flex items-start gap-2 text-xs text-[#6E574B] bg-[#FAF0E1] p-3 rounded-xl border border-[#DFCBB5]">
              <MapPin size={16} className="text-[#B5562D] shrink-0 mt-0.5" />
              <p>
                <strong>Pickup Counter:</strong> Steel Tray Tiffin Window, Car Street (Next to Venkataramana Temple), Udupi. Show this token on your phone or quote {order.tokenNumber}.
              </p>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={onNewOrder}
                className="btn-sambar-cta flex-1 font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md flex items-center justify-center gap-2 active:scale-95 transition-all"
              >
                <RotateCcw size={15} />
                <span>Build Another Tray</span>
              </button>

              <button
                onClick={onClose}
                className="btn-steel-press px-4 py-3 font-bold text-xs rounded-xl text-center"
              >
                View Reserved Tray
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
