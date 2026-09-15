import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrayLine } from '../types';
import { FoodIllustration } from './FoodIllustration';
import { PixelIcon } from './PixelIcon';

interface SteelTrayGraphicProps {
  lines: TrayLine[];
  onUpdateQty: (lineId: string, delta: number) => void;
  onRemoveLine: (lineId: string) => void;
  onQuickAddFirst?: () => void;
  highlightSection?: string | null;
}

export const SteelTrayGraphic: React.FC<SteelTrayGraphicProps> = ({
  lines,
  onUpdateQty,
  onRemoveLine,
  onQuickAddFirst,
  highlightSection
}) => {
  // Partition lines by their physical plate destination
  const mainItems = lines.filter(l => l.traySection === 'main');
  const katori1Items = lines.filter(l => l.traySection === 'katori-1');
  const katori2Items = lines.filter(l => l.traySection === 'katori-2');
  const drinkItems = lines.filter(l => l.traySection === 'tumbler');

  const isEmpty = lines.length === 0;

  return (
    <div className="relative w-full max-w-[540px] mx-auto select-none">
      {/* Outer Heavy Stainless Steel Platter Frame */}
      <div 
        className="relative rounded-[32px] p-4 sm:p-5 bg-brushed-steel steel-tray-rim transition-all duration-300"
      >
        {/* Embossed metal counter branding stamp */}
        <div className="flex items-center justify-between px-3 pb-3 text-[10px] sm:text-[11px] font-mono-chit tracking-wider uppercase text-[#47545C] border-b border-[#A2ACB0]/70">
          <div className="flex items-center gap-2 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#264E22] border border-[#799C75]" />
            <span>ಉಡುಪಿ ಸ್ಟೀಲ್ ತಟ್ಟೆ • STAINLESS TRAY SPEC. 304</span>
          </div>
          <span className="text-[#5F6D75] text-[10px]">CAST-IRON TAWA COMPLIANT</span>
        </div>

        {/* Top Compartment Row: Two Deep Circular Katoris + One Circular Tumbler Dock */}
        <div className="grid grid-cols-3 gap-3 my-4">
          
          {/* Katori 1: Stamped Circular Dip Well */}
          <div 
            className={`relative aspect-square max-h-32 rounded-full p-2 flex flex-col items-center justify-center transition-all duration-300 ${
              highlightSection === 'katori-1' 
                ? 'ring-2 ring-[#B5562D] scale-105 katori-well' 
                : 'katori-well'
            }`}
          >
            <AnimatePresence mode="popLayout">
              {katori1Items.length > 0 ? (
                katori1Items.map(item => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ scale: 0.3, y: -35, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 1.2, y: -25, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 420, damping: 24 }}
                    className="relative flex flex-col items-center group cursor-pointer"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16">
                      <FoodIllustration type={item.visualType} size="md" />
                    </div>
                    <span className="text-[10px] font-bold text-[#141C20] truncate max-w-[85px] text-center leading-tight mt-0.5">
                      {item.name.replace(' Chutney', '')}
                      {item.kannadaName && (
                        <span className="text-[8px] text-[#5F6D75] font-normal ml-1">
                          {item.kannadaName}
                        </span>
                      )}
                    </span>

                    {/* Quantity Badge */}
                    <div className="absolute -top-1 -right-1 flex items-center bg-[#192227] border border-[#52636F] text-[#F0F5F8] rounded-full text-[9px] font-mono-chit font-bold px-1.5 py-0.2 shadow-sm">
                      x{item.quantity}
                    </div>

                    {/* Remove Overlay */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveLine(item.id);
                      }}
                      title="Remove from katori"
                      className="absolute inset-0 bg-[#162026]/85 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-2xs"
                    >
                      <PixelIcon name="trash" size={14} className="text-red-400" />
                    </button>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 0.65 }} 
                  className="flex flex-col items-center justify-center text-center"
                >
                  <div className="w-8 h-8 rounded-full border border-dashed border-[#57646B] flex items-center justify-center mb-0.5">
                    <PixelIcon name="katori" size={13} className="text-[#434F55]" />
                  </div>
                  <span className="text-[9px] text-[#3D4950] font-mono-chit font-semibold">
                    Chutney <span className="text-[8px] text-[#5F6D75] font-normal">ಚಟ್ನಿ</span>
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Katori 2: Stamped Circular Sambar Well */}
          <div 
            className={`relative aspect-square max-h-32 rounded-full p-2 flex flex-col items-center justify-center transition-all duration-300 ${
              highlightSection === 'katori-2' 
                ? 'ring-2 ring-[#B5562D] scale-105 katori-well' 
                : 'katori-well'
            }`}
          >
            <AnimatePresence mode="popLayout">
              {katori2Items.length > 0 ? (
                katori2Items.map(item => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ scale: 0.3, y: -35, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 1.2, y: -25, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 420, damping: 24 }}
                    className="relative flex flex-col items-center group cursor-pointer"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16">
                      <FoodIllustration type={item.visualType} size="md" />
                    </div>
                    <span className="text-[10px] font-bold text-[#141C20] truncate max-w-[85px] text-center leading-tight mt-0.5">
                      {item.name.replace('Udupi ', '').replace(' Drumstick', '')}
                      {item.kannadaName && (
                        <span className="text-[8px] text-[#5F6D75] font-normal ml-1">
                          {item.kannadaName}
                        </span>
                      )}
                    </span>

                    <div className="absolute -top-1 -right-1 flex items-center bg-[#192227] border border-[#52636F] text-[#F0F5F8] rounded-full text-[9px] font-mono-chit font-bold px-1.5 py-0.2 shadow-sm">
                      x{item.quantity}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveLine(item.id);
                      }}
                      title="Remove from katori"
                      className="absolute inset-0 bg-[#162026]/85 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-2xs"
                    >
                      <PixelIcon name="trash" size={14} className="text-red-400" />
                    </button>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 0.65 }} 
                  className="flex flex-col items-center justify-center text-center"
                >
                  <div className="w-8 h-8 rounded-full border border-dashed border-[#57646B] flex items-center justify-center mb-0.5">
                    <PixelIcon name="katori" size={13} className="text-[#434F55]" />
                  </div>
                  <span className="text-[9px] text-[#3D4950] font-mono-chit font-semibold">
                    Sambar <span className="text-[8px] text-[#5F6D75] font-normal">ಸಾಂಬಾರು</span>
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Tumbler Dock: Circular Davarah Dock Well */}
          <div 
            className={`relative aspect-square max-h-32 rounded-full p-2 flex flex-col items-center justify-center transition-all duration-300 ${
              highlightSection === 'tumbler' 
                ? 'ring-2 ring-[#B5562D] scale-105 tumbler-dock-well' 
                : 'tumbler-dock-well'
            }`}
          >
            <AnimatePresence mode="popLayout">
              {drinkItems.length > 0 ? (
                drinkItems.map(item => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ scale: 0.3, y: -35, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 1.2, y: -25, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 420, damping: 24 }}
                    className="relative flex flex-col items-center group cursor-pointer"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16">
                      <FoodIllustration type={item.visualType} size="md" />
                    </div>
                    <span className="text-[10px] font-bold text-[#141C20] truncate max-w-[85px] text-center leading-tight mt-0.5">
                      {item.name.replace('Degree ', '')}
                      {item.kannadaName && (
                        <span className="text-[8px] text-[#5F6D75] font-normal ml-1">
                          {item.kannadaName}
                        </span>
                      )}
                    </span>

                    <div className="absolute -top-1 -right-1 flex items-center bg-[#192227] border border-[#52636F] text-[#F0F5F8] rounded-full text-[9px] font-mono-chit font-bold px-1.5 py-0.2 shadow-sm">
                      x{item.quantity}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveLine(item.id);
                      }}
                      title="Remove beverage"
                      className="absolute inset-0 bg-[#162026]/85 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-2xs"
                    >
                      <PixelIcon name="trash" size={14} className="text-red-400" />
                    </button>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 0.65 }} 
                  className="flex flex-col items-center justify-center text-center"
                >
                  <div className="w-8 h-8 rounded-full border border-dashed border-[#57646B] flex items-center justify-center mb-0.5">
                    <PixelIcon name="tumbler" size={13} className="text-[#434F55]" />
                  </div>
                  <span className="text-[9px] text-[#3D4950] font-mono-chit font-semibold">
                    Kaapi <span className="text-[8px] text-[#5F6D75] font-normal">ಕಾಫಿ</span>
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Main Central Platter Well: Banana Leaf (`ಬಾಳೆ ಎಲೆ`) Liner */}
        <div 
          className="relative min-h-[260px] rounded-[22px] p-4 bg-banana-leaf-texture overflow-hidden transition-all duration-300 border-3 border-[#1A3816] shadow-[inset_0_4px_12px_rgba(0,0,0,0.6)]"
        >
          {/* Natural leaf midrib line */}
          <div className="absolute inset-x-0 top-1/2 h-[2px] bg-[#1B3A18] pointer-events-none opacity-60" />

          {/* Stamped leaf seal */}
          <div className="absolute bottom-2.5 right-3 text-[9px] font-mono-chit text-[#A3D19F]/60 tracking-wider pointer-events-none select-none flex items-center gap-1">
            <PixelIcon name="leaf" size={10} className="text-[#A3D19F]/60" />
            <span>ಬಾಳೆ ಎಲೆ • TRIMMED BANANA LEAF LINER</span>
          </div>

          <AnimatePresence mode="popLayout">
            {!isEmpty && mainItems.length > 0 ? (
              <div className="grid grid-cols-2 gap-3 relative z-10">
                {mainItems.map(item => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ scale: 0.35, y: -45, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 1.15, y: -30, opacity: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 24,
                      mass: 0.8
                    }}
                    className="relative bg-[#1E272D]/95 backdrop-blur-xs rounded-xl p-3 border border-[#3A4953] shadow-lg flex flex-col items-center group transition-transform"
                  >
                    {/* Visual food illustration */}
                    <div className="w-18 h-18 sm:w-20 sm:h-20 mb-1">
                      <FoodIllustration type={item.visualType} size="lg" />
                    </div>

                    <div className="text-center w-full">
                      <h4 className="font-udupi-display font-bold text-sm text-[#F0F5F8] truncate leading-tight">
                        {item.name}
                      </h4>
                      {item.kannadaName && (
                        <p className="text-[11px] text-[#E69B19] font-medium leading-none mt-0.5">
                          {item.kannadaName}
                        </p>
                      )}

                      {/* Combo selection breakdown */}
                      {item.comboSelection && (
                        <div className="mt-1.5 text-[9px] bg-[#161D22] text-[#C4D3DD] rounded px-1.5 py-1 text-left border border-[#2F3D46] space-y-0.5 font-mono-chit">
                          <p className="truncate font-semibold text-[#B5562D]">
                            ✓ {item.comboSelection.base.name}
                          </p>
                          <p className="truncate text-[#91A4B0]">
                            + {item.comboSelection.chutney.name} • {item.comboSelection.side.name}
                          </p>
                          <p className="truncate text-[#91A4B0]">
                            + {item.comboSelection.drink.name}
                          </p>
                        </div>
                      )}

                      {/* Line bottom controls */}
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#2F3E47] w-full">
                        <span className="font-mono-chit text-xs font-bold text-[#B5562D]">
                          ₹{item.lineTotal}
                        </span>

                        {/* Quantity Stepper */}
                        <div className="flex items-center gap-1 bg-[#141A1E] rounded-md border border-[#384853] px-1 py-0.5 shadow-inner">
                          <button
                            onClick={() => onUpdateQty(item.id, -1)}
                            className="w-5 h-5 flex items-center justify-center rounded text-[#B1C3CF] hover:bg-[#253037] hover:text-white transition-colors"
                            title="Decrease quantity"
                          >
                            <PixelIcon name="minus" size={10} />
                          </button>
                          <span className="font-mono-chit text-xs font-bold px-1 text-[#F0F5F8] min-w-[14px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQty(item.id, 1)}
                            className="w-5 h-5 flex items-center justify-center rounded text-[#B1C3CF] hover:bg-[#253037] hover:text-white transition-colors"
                            title="Increase quantity"
                          >
                            <PixelIcon name="plus" size={10} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Quick remove button */}
                    <button
                      onClick={() => onRemoveLine(item.id)}
                      title="Remove from platter"
                      className="absolute top-2 right-2 w-6 h-6 rounded-md bg-[#161D22] hover:bg-red-950 text-[#8E9FA9] hover:text-red-400 flex items-center justify-center shadow-xs border border-[#36444E] transition-colors opacity-80 group-hover:opacity-100"
                    >
                      <PixelIcon name="trash" size={11} />
                    </button>
                  </motion.div>
                ))}
              </div>
            ) : null}
          </AnimatePresence>

          {/* Authentic Darshini Empty State */}
          {isEmpty && (
            <motion.div 
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center text-center h-[230px] px-6 text-[#E9F4E7]"
            >
              <div className="w-14 h-14 rounded-full bg-[#183615] border-2 border-[#3F6B3B] flex items-center justify-center mb-2.5 shadow-inner">
                <span className="font-udupi-display text-xl text-[#CDE6C9] font-black">ತಟ್ಟೆ</span>
              </div>
              
              <h3 className="font-udupi-display text-base sm:text-lg font-bold text-[#F4F9F2] mb-1">
                Fresh Banana Leaf Awaiting Orders
              </h3>
              <p className="text-xs text-[#BED8BA] max-w-xs leading-relaxed mb-4 font-mono-chit">
                Cast-iron tawa is hot. Select crisp Goli Baje, lace-thin Neer Dosa, or build a combo platter from the counter menu.
              </p>

              {onQuickAddFirst && (
                <button
                  onClick={onQuickAddFirst}
                  className="btn-sambar-cta inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl active:scale-95"
                >
                  <PixelIcon name="dosa" size={14} />
                  <span>Platter Fresh Neer Dosa (₹85)</span>
                </button>
              )}
            </motion.div>
          )}

          {/* Partially filled state (sides only) */}
          {!isEmpty && mainItems.length === 0 && (
            <div className="flex flex-col items-center justify-center h-[230px] text-[#BED8BA] text-center px-4 font-mono-chit">
              <p className="font-udupi-display text-sm text-[#F4F9F2] mb-1 font-bold">
                Leaf Center Empty
              </p>
              <p className="text-xs max-w-xs text-[#9DC499]">
                Katoris are filled. Add a hot tiffin (Neer Dosa, Goli Baje, or Sannas) to complete the tray.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
