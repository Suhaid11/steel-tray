import React from 'react';
import { MenuItem } from '../types';
import { FoodIllustration } from './FoodIllustration';
import { PixelIcon } from './PixelIcon';

interface MenuItemCardProps {
  item: MenuItem;
  onAdd: (item: MenuItem, event: React.MouseEvent<HTMLButtonElement>) => void;
  onOpenComboBuilder?: (item: MenuItem) => void;
  isHero?: boolean;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({
  item,
  onAdd,
  onOpenComboBuilder,
  isHero = false
}) => {
  const isCombo = item.category === 'combo';
  const isSide = item.category === 'side';

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isCombo && onOpenComboBuilder) {
      onOpenComboBuilder(item);
    } else {
      onAdd(item, e);
    }
  };

  // -------------------------------------------------------------
  // VARIANT 1: Bento Hero Card for Combos & Signature Thalis
  // Roughly double width (spans 2 columns on md/lg), rich options
  // -------------------------------------------------------------
  if (isHero || isCombo) {
    return (
      <div className="relative col-span-1 md:col-span-2 bg-gradient-to-br from-[#FFFDF9] via-[#FAF4EA] to-[#F3E7D6] rounded-2xl border-2 border-[#D8C7B0] p-5 sm:p-6 shadow-sm hover:shadow-md transition-all group overflow-hidden">
        {/* Subtle warm ambient highlight */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-radial from-amber-500/5 to-transparent pointer-events-none" />

        {/* Top Badges Row: Discreet non-red secondary badges (Fix 2) */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 relative z-10">
          <div className="flex items-center gap-2">
            {/* Banana-leaf green secondary tag instead of red */}
            <span className="inline-flex items-center gap-1.5 bg-[#EDF5EB] text-[#295A24] border border-[#C6DEC2] text-[11px] font-mono-chit font-bold px-2.5 py-0.5 rounded-sm">
              <PixelIcon name="sparkle" size={11} className="text-[#295A24]" />
              <span>
                {item.id === 'udupi-raja-combo'
                  ? 'ROYAL THALI • ರಾಜ ಕಾಂಬೋ'
                  : 'EXPRESS COMBO • ಎಕ್ಸ್‌ಪ್ರೆಸ್ ಕಾಂಬೋ'}
              </span>
            </span>

            {item.bundleDiscount && (
              <span className="inline-flex items-center gap-1 bg-[#F4ECE0] text-[#7A5A43] border border-[#DFCBB5] text-[11px] font-mono-chit font-bold px-2 py-0.5 rounded-sm">
                SAVE ₹{item.bundleDiscount} BUNDLED
              </span>
            )}
          </div>

          {item.kannadaName && (
            <span className="text-xs font-mono-chit text-[#6B5347] bg-[#F3E7D6] px-2 py-0.5 rounded border border-[#DFCBB5]">
              {item.kannadaName}
            </span>
          )}
        </div>

        {/* Content Layout: 8 cols description / 4 cols visual */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center relative z-10 my-2">
          <div className="sm:col-span-8 space-y-2">
            <h3 className="font-udupi-display text-xl sm:text-2xl font-bold text-[#2C1810] group-hover:text-[#B5562D] transition-colors leading-tight">
              {item.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#5C463A] leading-relaxed">
              {item.description}
            </p>

            {/* Micro combo breakdown chips */}
            <div className="flex flex-wrap gap-1.5 pt-1.5 font-mono-chit text-[11px]">
              {item.id === 'buns-kaapi-express' ? (
                <>
                  <span className="bg-[#FFFFFF] text-[#4A3427] px-2 py-0.5 rounded border border-[#DFCBB5] shadow-2xs">
                    2x Mangalore Buns
                  </span>
                  <span className="text-[#9E8B7E] self-center">+</span>
                  <span className="bg-[#FFFFFF] text-[#4A3427] px-2 py-0.5 rounded border border-[#DFCBB5] shadow-2xs">
                    1x Chutney Katori
                  </span>
                  <span className="text-[#9E8B7E] self-center">+</span>
                  <span className="bg-[#FFFFFF] text-[#4A3427] px-2 py-0.5 rounded border border-[#DFCBB5] shadow-2xs">
                    1x Gir Cow Benne
                  </span>
                  <span className="text-[#9E8B7E] self-center">+</span>
                  <span className="bg-[#FFFFFF] text-[#4A3427] px-2 py-0.5 rounded border border-[#DFCBB5] shadow-2xs">
                    1x Degree Kaapi
                  </span>
                </>
              ) : (
                <>
                  <span className="bg-[#FFFFFF] text-[#4A3427] px-2 py-0.5 rounded border border-[#DFCBB5] shadow-2xs">
                    1x Tiffin Base
                  </span>
                  <span className="text-[#9E8B7E] self-center">+</span>
                  <span className="bg-[#FFFFFF] text-[#4A3427] px-2 py-0.5 rounded border border-[#DFCBB5] shadow-2xs">
                    1x Chutney Katori
                  </span>
                  <span className="text-[#9E8B7E] self-center">+</span>
                  <span className="bg-[#FFFFFF] text-[#4A3427] px-2 py-0.5 rounded border border-[#DFCBB5] shadow-2xs">
                    1x Sambar Katori
                  </span>
                  <span className="text-[#9E8B7E] self-center">+</span>
                  <span className="bg-[#FFFFFF] text-[#4A3427] px-2 py-0.5 rounded border border-[#DFCBB5] shadow-2xs">
                    1x Degree Kaapi
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Platter Visual Center */}
          <div className="sm:col-span-4 flex items-center justify-center p-3 bg-[#FAF3E8] rounded-2xl border border-[#DDCDB8] shadow-inner">
            <div className="w-24 h-24 sm:w-28 sm:h-28">
              <FoodIllustration type={item.visualType} size="lg" />
            </div>
          </div>
        </div>

        {/* Bottom Bar: Price & Primary Terracotta Action Button */}
        <div className="flex items-center justify-between pt-4 mt-3 border-t border-[#DFCBB5] relative z-10">
          <div className="flex items-baseline gap-2 font-mono-chit">
            <span className="text-xl font-bold text-[#2C1810]">
              ₹{item.price}
            </span>
            {item.bundleDiscount && (
              <span className="text-xs text-[#8A7669] line-through">
                ₹{item.price + item.bundleDiscount}
              </span>
            )}
            <span className="text-[10px] text-[#7A6152] uppercase">
              (Thali Rate)
            </span>
          </div>

          {/* Primary Action Button: Dominant Terracotta / Clay Accent (Fix 2) */}
          <button
            onClick={handleClick}
            className="btn-sambar-cta flex items-center gap-2 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-sm active:scale-95"
          >
            <PixelIcon name="sparkle" size={13} />
            <span>Customize & Build Tray</span>
          </button>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VARIANT 2: Circular Katori Tile for Katoris & Dips (Fix 3)
  // Tight circular tile geometry echoing the tray's katori wells
  // -------------------------------------------------------------
  if (isSide) {
    return (
      <div className="bg-[#FFFFFF] rounded-2xl border-2 border-[#E2D5C3] hover:border-[#B5562D]/60 p-3.5 flex flex-col items-center justify-between transition-all group shadow-xs hover:shadow-sm text-center relative">
        {/* Subtle Katori Well Container */}
        <div className="w-18 h-18 rounded-full bg-gradient-to-br from-[#FAF4EA] via-[#F2E5D4] to-[#E5D5C0] border-2 border-[#D5C4AE] flex items-center justify-center p-2 shadow-inner mb-2 group-hover:scale-105 transition-transform">
          <FoodIllustration type={item.visualType} size="sm" />
        </div>

        {/* Labels in filter-coffee brown */}
        <div className="w-full mb-2">
          <h4 className="font-udupi-display text-xs sm:text-sm font-bold text-[#2C1810] group-hover:text-[#B5562D] transition-colors truncate">
            {item.name}
          </h4>
          {item.kannadaName && (
            <p className="text-[10px] font-mono-chit text-[#7E695D] truncate mt-0.5">
              {item.kannadaName}
            </p>
          )}
        </div>

        {/* Price & Clay Add Button */}
        <div className="w-full flex items-center justify-between pt-2 border-t border-[#EDE1D1]">
          <span className="font-mono-chit text-xs font-bold text-[#2C1810]">
            ₹{item.price}
          </span>

          <button
            onClick={handleClick}
            className="btn-sambar-cta text-[11px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-2xs"
            title="Drop into platter katori"
          >
            <PixelIcon name="plus" size={10} />
            <span>+ Katori</span>
          </button>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VARIANT 3: Compact Bento Tile for Single Tiffins & Drinks
  // Clean card with low-weight badges, dark coffee text, clay CTA
  // -------------------------------------------------------------
  return (
    <div className="bg-[#FFFFFF] rounded-2xl border border-[#DECDBA] hover:border-[#B5562D]/50 p-4 flex flex-col justify-between transition-all group shadow-xs hover:shadow-sm">
      {/* Top micro badges: quiet banana-leaf green or neutral, NOT red (Fix 2) */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex flex-wrap items-center gap-1.5">
          {item.isFreshHot && (
            <span className="inline-flex items-center gap-1 bg-[#EDF5EB] text-[#295A24] border border-[#C6DEC2] text-[10px] font-mono-chit font-semibold px-2 py-0.5 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#295A24]" />
              TAWA FRESH
            </span>
          )}
        </div>

        {item.kannadaName && (
          <span className="text-[10px] font-mono-chit text-[#6B5347] bg-[#F4ECE0] px-2 py-0.5 rounded border border-[#E2D4C2]">
            {item.kannadaName}
          </span>
        )}
      </div>

      {/* Main info & visual */}
      <div className="flex items-start gap-3 my-2">
        <div className="flex-1 min-w-0">
          <h3 className="font-udupi-display text-base font-bold text-[#2C1810] group-hover:text-[#B5562D] transition-colors leading-snug">
            {item.name}
          </h3>
          <p className="text-xs text-[#665044] mt-1 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="w-16 h-16 shrink-0 flex items-center justify-center p-1 bg-[#F9F4EB] rounded-xl border border-[#DECDBA]">
          <FoodIllustration type={item.visualType} size="md" />
        </div>
      </div>

      {/* Bottom row: Price & Primary Action (Terracotta button) */}
      <div className="flex items-center justify-between pt-3 mt-2 border-t border-[#EDE1D1]">
        <span className="text-base font-mono-chit font-bold text-[#2C1810]">
          ₹{item.price}
        </span>

        {/* Primary Action Button in Terracotta */}
        <button
          onClick={handleClick}
          className="btn-sambar-cta flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-xl transition-all shadow-2xs active:scale-95"
        >
          <PixelIcon name="plus" size={11} />
          <span>Add to Tray</span>
        </button>
      </div>
    </div>
  );
};
