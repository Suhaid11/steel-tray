import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MenuItem, ComboOptionItem, ComboSelection } from '../types';
import { PixelIcon } from './PixelIcon';
import { X, Check } from 'lucide-react';

interface ComboBuilderModalProps {
  item: MenuItem;
  isOpen: boolean;
  onClose: () => void;
  onAddCombo: (selection: ComboSelection, event?: React.MouseEvent) => void;
}

export const ComboBuilderModal: React.FC<ComboBuilderModalProps> = ({
  item,
  isOpen,
  onClose,
  onAddCombo
}) => {
  const options = item.comboOptions;
  if (!options) return null;

  const bases = options.bases || [
    { id: 'base-neer', name: 'Neer Dosa (3 pcs)', kannadaName: 'ನೀರ್ ದೋಸೆ', price: 85, description: 'Lace rice crepes' },
    { id: 'base-goli', name: 'Goli Baje (4 pcs)', kannadaName: 'ಗೋಳಿ ಬಜೆ', price: 75, description: 'Crisp coconut fritters' }
  ];

  const chutneys = options.chutneys;
  const sides = options.sides;
  const drinks = options.drinks;

  const [selectedBase, setSelectedBase] = useState<ComboOptionItem>(bases[0]);
  const [selectedChutney, setSelectedChutney] = useState<ComboOptionItem>(chutneys[0]);
  const [selectedSide, setSelectedSide] = useState<ComboOptionItem>(sides[0]);
  const [selectedDrink, setSelectedDrink] = useState<ComboOptionItem>(drinks[0]);

  // Pricing calculations
  const individualTotal = selectedBase.price + selectedChutney.price + selectedSide.price + selectedDrink.price;
  const bundleDiscount = item.bundleDiscount || 45;
  const bundlePrice = Math.max(90, individualTotal - bundleDiscount);
  const actualSavings = individualTotal - bundlePrice;

  const handleServe = (e: React.MouseEvent) => {
    const selection: ComboSelection = {
      base: selectedBase,
      chutney: selectedChutney,
      side: selectedSide,
      drink: selectedDrink,
      individualTotal,
      bundlePrice,
      savings: actualSavings
    };
    onAddCombo(selection, e);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5">
        {/* Soft dark counter backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#2C1810]/60 backdrop-blur-xs"
        />

        {/* Modal Platter Chamber */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          className="relative w-full max-w-2xl bg-[#FAF5EC] rounded-2xl sm:rounded-3xl border-2 border-[#D5C4B0] shadow-2xl overflow-hidden flex flex-col max-h-[92vh] z-10 text-[#2C1810]"
        >
          {/* Header */}
          <div className="bg-[#F3E7D6] px-5 py-4 flex items-center justify-between border-b-2 border-[#DECBB6] relative">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF4EA] border border-[#D5C4B0] flex items-center justify-center text-[#B5562D] shadow-inner">
                <PixelIcon name="sparkle" size={18} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono-chit text-[11px] uppercase tracking-wider text-[#6E574B]">
                    ಕಾಂಬೋ ಬಿಲ್ಡರ್ • ASSEMBLE TRAY
                  </span>
                  <span className="bg-[#EDF5EB] text-[#295A24] border border-[#C6DEC2] text-[10px] font-bold px-2 py-0.5 rounded font-mono-chit">
                    SAVE ₹{actualSavings}
                  </span>
                </div>
                <h2 className="font-udupi-display text-xl sm:text-2xl font-bold text-[#2C1810] tracking-tight">
                  {item.name}
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

          {/* Builder Steps Body */}
          <div className="overflow-y-auto p-5 space-y-6 flex-1 bg-[#FAF5EC]">
            {/* Step 1: Base */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <h3 className="font-udupi-display font-bold text-base text-[#2C1810] flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-[#B5562D] text-white text-xs font-mono-chit font-bold flex items-center justify-center">
                    1
                  </span>
                  Pick your Tiffin Base
                </h3>
                <span className="text-xs text-[#6E574B] font-mono-chit">
                  Plates on banana leaf center
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {bases.map(b => {
                  const isSelected = selectedBase.id === b.id;
                  return (
                    <button
                      key={b.id}
                      onClick={() => setSelectedBase(b)}
                      className={`relative p-3 rounded-xl text-left transition-all border ${
                        isSelected
                          ? 'bg-[#FFFFFF] border-[#B5562D] ring-2 ring-[#B5562D]/30 shadow-sm'
                          : 'bg-[#F4ECE0] border-[#DECBB6] hover:border-[#CBB7A0]'
                      }`}
                    >
                      {isSelected && (
                        <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#B5562D] text-white flex items-center justify-center">
                          <Check size={10} strokeWidth={3} />
                        </span>
                      )}
                      <p className="font-udupi-display font-bold text-sm text-[#2C1810] leading-tight">
                        {b.name}
                      </p>
                      <p className="text-[11px] text-[#6E574B] mt-1">{b.description}</p>
                      <p className="text-[11px] font-mono-chit font-bold text-[#5C463A] mt-2">
                        Ind. ₹{b.price}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Chutney */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <h3 className="font-udupi-display font-bold text-base text-[#2C1810] flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-[#B5562D] text-white text-xs font-mono-chit font-bold flex items-center justify-center">
                    2
                  </span>
                  Pick your Chutney
                </h3>
                <span className="text-xs text-[#6E574B] font-mono-chit">
                  Fills Katori 1
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {chutneys.map(c => {
                  const isSelected = selectedChutney.id === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setSelectedChutney(c)}
                      className={`relative p-3 rounded-xl text-left transition-all border ${
                        isSelected
                          ? 'bg-[#FFFFFF] border-[#B5562D] ring-2 ring-[#B5562D]/30 shadow-sm'
                          : 'bg-[#F4ECE0] border-[#DECBB6] hover:border-[#CBB7A0]'
                      }`}
                    >
                      {isSelected && (
                        <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#B5562D] text-white flex items-center justify-center">
                          <Check size={10} strokeWidth={3} />
                        </span>
                      )}
                      <p className="font-udupi-display font-bold text-sm text-[#2C1810] leading-tight">
                        {c.name}
                      </p>
                      <p className="text-[11px] text-[#6E574B] mt-1">{c.description}</p>
                      <p className="text-[11px] font-mono-chit font-bold text-[#5C463A] mt-2">
                        Ind. ₹{c.price}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Side */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <h3 className="font-udupi-display font-bold text-base text-[#2C1810] flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-[#B5562D] text-white text-xs font-mono-chit font-bold flex items-center justify-center">
                    3
                  </span>
                  Pick your Warm Side
                </h3>
                <span className="text-xs text-[#6E574B] font-mono-chit">
                  Fills Katori 2
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {sides.map(s => {
                  const isSelected = selectedSide.id === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setSelectedSide(s)}
                      className={`relative p-3 rounded-xl text-left transition-all border ${
                        isSelected
                          ? 'bg-[#FFFFFF] border-[#B5562D] ring-2 ring-[#B5562D]/30 shadow-sm'
                          : 'bg-[#F4ECE0] border-[#DECBB6] hover:border-[#CBB7A0]'
                      }`}
                    >
                      {isSelected && (
                        <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#B5562D] text-white flex items-center justify-center">
                          <Check size={10} strokeWidth={3} />
                        </span>
                      )}
                      <p className="font-udupi-display font-bold text-sm text-[#2C1810] leading-tight">
                        {s.name}
                      </p>
                      <p className="text-[11px] text-[#6E574B] mt-1">{s.description}</p>
                      <p className="text-[11px] font-mono-chit font-bold text-[#5C463A] mt-2">
                        Ind. ₹{s.price}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Beverage */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <h3 className="font-udupi-display font-bold text-base text-[#2C1810] flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-[#B5562D] text-white text-xs font-mono-chit font-bold flex items-center justify-center">
                    4
                  </span>
                  Pick your Beverage
                </h3>
                <span className="text-xs text-[#6E574B] font-mono-chit">
                  Seated in Dabarah
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {drinks.map(d => {
                  const isSelected = selectedDrink.id === d.id;
                  return (
                    <button
                      key={d.id}
                      onClick={() => setSelectedDrink(d)}
                      className={`relative p-3 rounded-xl text-left transition-all border ${
                        isSelected
                          ? 'bg-[#FFFFFF] border-[#B5562D] ring-2 ring-[#B5562D]/30 shadow-sm'
                          : 'bg-[#F4ECE0] border-[#DECBB6] hover:border-[#CBB7A0]'
                      }`}
                    >
                      {isSelected && (
                        <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#B5562D] text-white flex items-center justify-center">
                          <Check size={10} strokeWidth={3} />
                        </span>
                      )}
                      <p className="font-udupi-display font-bold text-sm text-[#2C1810] leading-tight">
                        {d.name}
                      </p>
                      <p className="text-[11px] text-[#6E574B] mt-1">{d.description}</p>
                      <p className="text-[11px] font-mono-chit font-bold text-[#5C463A] mt-2">
                        Ind. ₹{d.price}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Bar: Live Pricing & Serve Action */}
          <div className="bg-[#F3E7D6] border-t-2 border-[#DECBB6] px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono-chit text-[#6E574B] uppercase tracking-wide">
                  Combo Bundle Total
                </span>
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono-chit text-xs text-[#8C7668] line-through">
                    ₹{individualTotal}
                  </span>
                  <span className="font-udupi-display text-2xl font-bold text-[#B5562D]">
                    ₹{bundlePrice}
                  </span>
                  <span className="bg-[#EDF5EB] text-[#295A24] border border-[#C6DEC2] text-xs font-bold px-2 py-0.5 rounded font-mono-chit">
                    You save ₹{actualSavings}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={handleServe}
              className="btn-sambar-cta w-full sm:w-auto text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>Serve Combo to Tray</span>
              <PixelIcon name="sparkle" size={14} />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
