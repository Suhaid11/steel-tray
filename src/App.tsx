import React, { useState, useEffect, useRef } from 'react';
import { MenuItem, TrayLine, PickupSlot, ComboSelection, OrderConfirmation } from './types';
import { MENU_ITEMS, generatePickupSlots } from './data/menu';
import { SteelTrayGraphic } from './components/SteelTrayGraphic';
import { ChitReceipt } from './components/ChitReceipt';
import { MenuItemCard } from './components/MenuItemCard';
import { ComboBuilderModal } from './components/ComboBuilderModal';
import { PickupSlotPickerModal } from './components/PickupSlotPickerModal';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { ServingFlightAnimation, ActiveFlight } from './components/ServingFlightAnimation';
import { SmartNudge } from './components/SmartNudge';
import { BudgetBar } from './components/BudgetBar';
import { PixelIcon } from './components/PixelIcon';
import { Odometer } from './components/Odometer';
import { UdupiSignboard } from './components/UdupiSignboard';
import { 
  ChevronUp, 
  ChevronDown
} from 'lucide-react';

const STORAGE_KEY_TRAY = 'steel_tray_lines_v2';
const STORAGE_KEY_SLOT = 'steel_tray_slot_v2';
const STORAGE_KEY_ORDER = 'steel_tray_last_order_v2';

export default function App() {
  // Navigation / Category filter
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Tray items state (loaded from localStorage if available)
  const [lines, setLines] = useState<TrayLine[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_TRAY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Pickup slots
  const [slots] = useState<PickupSlot[]>(() => generatePickupSlots());
  const [selectedSlot, setSelectedSlot] = useState<PickupSlot | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_SLOT);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Modals & Panels
  const [comboItemToBuild, setComboItemToBuild] = useState<MenuItem | null>(null);
  const [isSlotPickerOpen, setIsSlotPickerOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useState<OrderConfirmation | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ORDER);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Mobile Bottom Sheet expanded state
  const [isMobileTrayOpen, setIsMobileTrayOpen] = useState(false);

  // Active flights for the serve animation
  const [flights, setFlights] = useState<ActiveFlight[]>([]);
  const trayContainerRef = useRef<HTMLDivElement>(null);

  // Smart nudge state
  const [nudgeDismissed, setNudgeDismissed] = useState(false);

  // Budget mode state
  const [budgetLimit, setBudgetLimit] = useState<number | null>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_TRAY, JSON.stringify(lines));
    } catch (e) {
      console.warn('Storage error', e);
    }
  }, [lines]);

  useEffect(() => {
    try {
      if (selectedSlot) {
        localStorage.setItem(STORAGE_KEY_SLOT, JSON.stringify(selectedSlot));
      }
    } catch (e) {
      console.warn('Storage error', e);
    }
  }, [selectedSlot]);

  useEffect(() => {
    try {
      if (currentOrder) {
        localStorage.setItem(STORAGE_KEY_ORDER, JSON.stringify(currentOrder));
      } else {
        localStorage.removeItem(STORAGE_KEY_ORDER);
      }
    } catch (e) {
      console.warn('Storage error', e);
    }
  }, [currentOrder]);

  // Calculations
  const subtotal = lines.reduce((sum, item) => sum + item.lineTotal, 0);
  const totalItemCount = lines.reduce((sum, item) => sum + item.quantity, 0);
  const totalSavings = lines.reduce((sum, item) => {
    return sum + (item.comboSelection?.savings || 0) * item.quantity;
  }, 0);

  // Check if budget is exceeded
  const isBudgetExceeded = budgetLimit !== null && (subtotal + Math.round(subtotal * 0.05)) > budgetLimit;

  // Determine smart nudge: check if a base tiffin item is on the tray without a combo
  const hasBaseTiffin = lines.some(
    l => (l.itemId === 'neer-dosa' || l.itemId === 'goli-baje' || l.itemId === 'mangalore-buns') && !l.comboSelection
  );
  const showSmartNudge = hasBaseTiffin && !nudgeDismissed && !lines.some(l => l.comboSelection);

  // Debounce guard to prevent accidental touch double-taps on the same item
  const lastAddRef = useRef<{ id: string; time: number }>({ id: '', time: 0 });

  // Trigger the visual "serve flight" moment
  const triggerServeFlight = (
    visualType: string,
    eventTarget: HTMLElement | null
  ) => {
    let startX = window.innerWidth / 2;
    let startY = window.innerHeight / 2;

    if (eventTarget) {
      const rect = eventTarget.getBoundingClientRect();
      startX = rect.left + rect.width / 2;
      startY = rect.top + rect.height / 2;
    }

    let targetX = window.innerWidth - 200;
    let targetY = 280;

    if (trayContainerRef.current) {
      const trayRect = trayContainerRef.current.getBoundingClientRect();
      targetX = trayRect.left + trayRect.width / 2;
      targetY = trayRect.top + trayRect.height / 3;
    }

    const flightId = `flight-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
    const newFlight: ActiveFlight = {
      id: flightId,
      visualType,
      startX,
      startY,
      targetX,
      targetY
    };

    setFlights(prev => [...prev, newFlight]);
  };

  const handleFlightComplete = (flightId: string) => {
    setFlights(prev => prev.filter(f => f.id !== flightId));
  };

  // Add standard single item to tray
  const handleAddItem = (item: MenuItem, e?: React.MouseEvent) => {
    const now = Date.now();
    // Prevent accidental micro double-clicks within 220ms on the exact same item
    if (lastAddRef.current.id === item.id && now - lastAddRef.current.time < 220) {
      return;
    }
    lastAddRef.current = { id: item.id, time: now };

    // 1. Immediately update tray state (deterministic, single addition)
    setLines(prev => {
      const existingIndex = prev.findIndex(l => l.itemId === item.id && !l.comboSelection);
      if (existingIndex > -1) {
        const updated = [...prev];
        const curr = updated[existingIndex];
        const newQty = curr.quantity + 1;
        updated[existingIndex] = {
          ...curr,
          quantity: newQty,
          lineTotal: newQty * curr.unitPrice
        };
        return updated;
      }

      const newLine: TrayLine = {
        id: `line-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        itemId: item.id,
        name: item.name,
        kannadaName: item.kannadaName,
        quantity: 1,
        unitPrice: item.price,
        lineTotal: item.price,
        traySection: item.traySection,
        visualType: item.visualType,
        addedAt: Date.now()
      };

      return [...prev, newLine];
    });

    // 2. Launch non-blocking visual flight
    const targetElement = (e?.currentTarget as HTMLElement) || null;
    triggerServeFlight(item.visualType, targetElement);
  };

  // Add customized combo to tray
  const handleAddCombo = (selection: ComboSelection, e?: React.MouseEvent) => {
    if (!comboItemToBuild) return;
    const itemBeingBuilt = comboItemToBuild;

    const newLine: TrayLine = {
      id: `combo-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      itemId: itemBeingBuilt.id,
      name: `${itemBeingBuilt.name} (${selection.base.name.split(' ')[0]})`,
      kannadaName: itemBeingBuilt.kannadaName,
      quantity: 1,
      unitPrice: selection.bundlePrice,
      lineTotal: selection.bundlePrice,
      traySection: itemBeingBuilt.traySection,
      visualType: itemBeingBuilt.visualType,
      comboSelection: selection,
      addedAt: Date.now()
    };

    setLines(prev => [...prev, newLine]);
    setComboItemToBuild(null);

    const targetElement = (e?.currentTarget as HTMLElement) || null;
    triggerServeFlight(itemBeingBuilt.visualType, targetElement);
  };

  // Update line quantity
  const handleUpdateQty = (lineId: string, delta: number) => {
    setLines(prev => {
      return prev
        .map(l => {
          if (l.id !== lineId) return l;
          const newQty = l.quantity + delta;
          if (newQty <= 0) return null;
          return {
            ...l,
            quantity: newQty,
            lineTotal: newQty * l.unitPrice
          };
        })
        .filter(Boolean) as TrayLine[];
    });
  };

  // Remove line from tray
  const handleRemoveLine = (lineId: string) => {
    setLines(prev => prev.filter(l => l.id !== lineId));
  };

  // Quick add from empty state
  const handleQuickAddFirst = () => {
    const neerDosa = MENU_ITEMS.find(i => i.id === 'neer-dosa');
    if (neerDosa) {
      setLines([
        {
          id: `line-${Date.now()}`,
          itemId: neerDosa.id,
          name: neerDosa.name,
          kannadaName: neerDosa.kannadaName,
          quantity: 1,
          unitPrice: neerDosa.price,
          lineTotal: neerDosa.price,
          traySection: neerDosa.traySection,
          visualType: neerDosa.visualType,
          addedAt: Date.now()
        }
      ]);
      triggerServeFlight(neerDosa.visualType, null);
    }
  };

  // Reserve order
  const handleReserve = () => {
    if (!selectedSlot || lines.length === 0) return;

    const tokenSeq = Math.floor(10 + Math.random() * 90);
    const tokenStr = `#0${tokenSeq}`;
    const gst = Math.round(subtotal * 0.05);

    const order: OrderConfirmation = {
      orderId: `ORD-${Date.now().toString(36).toUpperCase()}`,
      tokenNumber: tokenStr,
      createdAt: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
      pickupSlot: selectedSlot,
      items: [...lines],
      subtotal,
      savings: totalSavings,
      gst,
      total: subtotal + gst,
      instructions: 'Pay at the counter upon presenting token slip.'
    };

    setCurrentOrder(order);
  };

  // Reset order and tray
  const handleNewOrder = () => {
    setCurrentOrder(null);
    setLines([]);
    localStorage.removeItem(STORAGE_KEY_TRAY);
    localStorage.removeItem(STORAGE_KEY_ORDER);
  };

  const categories = [
    { id: 'all', label: 'All Items', kannada: 'ಎಲ್ಲಾ' },
    { id: 'tiffin', label: 'Tiffins', kannada: 'ಬಿಸಿ ತಿಂಡಿ' },
    { id: 'combo', label: 'Tray Combos', kannada: 'ಕಾಂಬೋ' },
    { id: 'side', label: 'Katoris & Dips', kannada: 'ಚಟ್ನಿ' },
    { id: 'drink', label: 'Kaapi & Brews', kannada: 'ಕಾಫಿ' }
  ];

  // Group items for Asymmetric Bento Sections in 'all' view
  const comboItems = MENU_ITEMS.filter(i => i.category === 'combo');
  const tiffinItems = MENU_ITEMS.filter(i => i.category === 'tiffin');
  const sideItems = MENU_ITEMS.filter(i => i.category === 'side');
  const drinkItems = MENU_ITEMS.filter(i => i.category === 'drink');

  return (
    <div className="min-h-screen text-[#2C1810] flex flex-col selection:bg-[#B5562D] selection:text-white pb-28 lg:pb-12 bg-[#FDF8ED]">
      {/* Flight Animation Canvas */}
      <ServingFlightAnimation flights={flights} onFlightComplete={handleFlightComplete} />

      {/* Top Header: Warm Cream Enamel Signboard Header Bar (Fix 1) */}
      <header className="sticky top-0 z-30 bg-[#FAF5EC]/95 backdrop-blur-md border-b border-[#E5DACB] shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          
          {/* Custom SVG Udupi Signboard Wordmark (Fix 4) */}
          <UdupiSignboard />

          {/* Header Right: Active Slot Badge & Mobile Glance */}
          <div className="flex items-center gap-3">
            {selectedSlot ? (
              <button
                onClick={() => setIsSlotPickerOpen(true)}
                className="hidden sm:flex items-center gap-2 btn-steel-press text-xs px-3 py-1.5 rounded-lg font-mono-chit"
              >
                <PixelIcon name="clock" size={13} className="text-[#B5562D]" />
                <span className="font-bold text-[#2C1810]">{selectedSlot.time}</span>
                <span className="text-[10px] text-[#6E574B]">(Change)</span>
              </button>
            ) : (
              <button
                onClick={() => setIsSlotPickerOpen(true)}
                className="hidden sm:flex items-center gap-2 btn-steel-press text-xs px-3 py-1.5 rounded-lg font-mono-chit text-[#B5562D]"
              >
                <PixelIcon name="clock" size={13} />
                <span className="font-bold">Select Pickup Slot</span>
              </button>
            )}

            {/* Tray peek button for mobile */}
            <button
              onClick={() => setIsMobileTrayOpen(!isMobileTrayOpen)}
              className="lg:hidden btn-sambar-cta flex items-center gap-2 text-xs font-bold px-3.5 py-2 rounded-xl shadow-xs active:scale-95 transition-all text-white"
            >
              <span>Tray ({totalItemCount})</span>
              <Odometer value={subtotal} className="text-xs font-mono-chit" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Container: Split View on Desktop */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Menu / Categories / Bento Grid (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Banner: Authentic philosophy on warm cream/sand counter panel */}
            <div className="bg-[#FAF4EA] border-2 border-[#D9C7AF] rounded-2xl p-4 sm:p-5 relative overflow-hidden shadow-xs">
              {/* Stamped corner screw rivets */}
              <div className="absolute top-2.5 left-2.5 w-1.5 h-1.5 rounded-full bg-[#D2C2AE] border border-[#B5A490]" />
              <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-[#D2C2AE] border border-[#B5A490]" />
              <div className="absolute bottom-2.5 left-2.5 w-1.5 h-1.5 rounded-full bg-[#D2C2AE] border border-[#B5A490]" />
              <div className="absolute bottom-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-[#D2C2AE] border border-[#B5A490]" />

              <div className="flex items-start justify-between gap-3 relative z-10">
                <div>
                  <div className="flex items-center gap-2 text-[11px] font-mono-chit font-bold text-[#B5562D] uppercase tracking-wider mb-1">
                    <PixelIcon name="flame" size={13} className="text-[#B5562D]" />
                    <span>TAWA TO STEEL TRAY • ತಟ್ಟೆ ಸೇವೆ</span>
                  </div>
                  <h2 className="font-udupi-display text-lg sm:text-xl font-bold text-[#2C1810]">
                    Assemble your platter the traditional coastal Udupi way.
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5C463A] mt-1 leading-relaxed max-w-xl">
                    Every tiffin is plated directly onto a fresh trimmed banana leaf in a heavy stainless steel partitioned platter. Build a custom combo with bundle savings, or pick single items to drop into your circular katoris.
                  </p>
                </div>
              </div>

              {/* Spend Cap Tracker */}
              <div className="mt-4 pt-3 border-t border-[#DFCBB5]">
                <BudgetBar
                  currentSpend={subtotal + Math.round(subtotal * 0.05)}
                  budgetLimit={budgetLimit}
                  onSetBudget={setBudgetLimit}
                />
              </div>
            </div>

            {/* Smart Nudge Banner (if user added base without combo) */}
            {showSmartNudge && (
              <SmartNudge
                baseItemName="your Tiffin"
                onUpgradeToCombo={() => {
                  const rajaCombo = MENU_ITEMS.find(i => i.id === 'udupi-raja-combo');
                  if (rajaCombo) setComboItemToBuild(rajaCombo);
                  setNudgeDismissed(true);
                }}
                onDismiss={() => setNudgeDismissed(true)}
              />
            )}

            {/* Category Filter Pills (Fix 2: Terracotta clay is active only, quiet neutrals for inactive) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {categories.map(cat => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold font-mono-chit transition-all ${
                      isActive
                        ? 'btn-sambar-cta shadow-sm text-white'
                        : 'btn-steel-press text-[#5C463A] hover:text-[#2C1810]'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className="text-[10px] ml-1.5 opacity-75 font-normal">
                      {cat.kannada}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Asymmetric Bento Layout (Fix 3) */}
            {activeCategory === 'all' ? (
              <div className="space-y-7">
                {/* 1. Signature Combos: Hero Wide Cards */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between px-1">
                    <h3 className="font-udupi-display text-sm font-bold text-[#2C1810] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#B5562D]" />
                      <span>ಕಾಂಬೋ ತಟ್ಟೆಗಳು • Signature Combos & Platters</span>
                    </h3>
                    <span className="font-mono-chit text-[11px] text-[#7A6456]">
                      Double-width bento combo
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {comboItems.map(item => (
                      <MenuItemCard
                        key={item.id}
                        item={item}
                        onAdd={handleAddItem}
                        onOpenComboBuilder={setComboItemToBuild}
                        isHero={true}
                      />
                    ))}
                  </div>
                </div>

                {/* 2. Fresh Hot Tiffins: Compact 2-column bento tiles */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between px-1">
                    <h3 className="font-udupi-display text-sm font-bold text-[#2C1810] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#295A24]" />
                      <span>ಬಿಸಿ ತಿಂಡಿ • Fresh Hot Tiffins</span>
                    </h3>
                    <span className="font-mono-chit text-[11px] text-[#7A6456]">
                      Cast-iron tawa specials
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {tiffinItems.map(item => (
                      <MenuItemCard
                        key={item.id}
                        item={item}
                        onAdd={handleAddItem}
                        onOpenComboBuilder={setComboItemToBuild}
                      />
                    ))}
                  </div>
                </div>

                {/* 3. Katoris & Dips: Tight row of circular tiles echoing tray katoris (Fix 3) */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between px-1">
                    <h3 className="font-udupi-display text-sm font-bold text-[#2C1810] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#B5562D]" />
                      <span>ಕಟೋರಿ ಚಟ್ನಿ & ಸಾರು • Katoris & Dips (Round Wells)</span>
                    </h3>
                    <span className="font-mono-chit text-[11px] text-[#7A6456]">
                      Drops directly into plate katoris
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {sideItems.map(item => (
                      <MenuItemCard
                        key={item.id}
                        item={item}
                        onAdd={handleAddItem}
                        onOpenComboBuilder={setComboItemToBuild}
                      />
                    ))}
                  </div>
                </div>

                {/* 4. Kaapi & Coastal Brews: Tumbler dock presentation */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between px-1">
                    <h3 className="font-udupi-display text-sm font-bold text-[#2C1810] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#6B4B35]" />
                      <span>ಫಿಲ್ಟರ್ ಕಾಫಿ & ಪಾನೀಯ • Kaapi & Coastal Brews</span>
                    </h3>
                    <span className="font-mono-chit text-[11px] text-[#7A6456]">
                      Seated in dabarah dock
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {drinkItems.map(item => (
                      <MenuItemCard
                        key={item.id}
                        item={item}
                        onAdd={handleAddItem}
                        onOpenComboBuilder={setComboItemToBuild}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : activeCategory === 'side' ? (
              /* Dedicated Katoris & Dips category view: tight circular katori grid (Fix 3) */
              <div className="space-y-3">
                <div className="flex items-center justify-between px-1">
                  <h3 className="font-udupi-display text-sm font-bold text-[#2C1810]">
                    ಕಟೋರಿ ಚಟ್ನಿ & ಸಾರು • Fresh Chutneys & Sambar Wells
                  </h3>
                  <span className="font-mono-chit text-[11px] text-[#7A6456]">
                    Circular Katori Geometry
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {sideItems.map(item => (
                    <MenuItemCard
                      key={item.id}
                      item={item}
                      onAdd={handleAddItem}
                      onOpenComboBuilder={setComboItemToBuild}
                    />
                  ))}
                </div>
              </div>
            ) : activeCategory === 'combo' ? (
              /* Dedicated Combos category view: large hero cards */
              <div className="space-y-4">
                {comboItems.map(item => (
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    onAdd={handleAddItem}
                    onOpenComboBuilder={setComboItemToBuild}
                    isHero={true}
                  />
                ))}
              </div>
            ) : activeCategory === 'drink' ? (
              /* Dedicated Drinks category view */
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {drinkItems.map(item => (
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    onAdd={handleAddItem}
                    onOpenComboBuilder={setComboItemToBuild}
                  />
                ))}
              </div>
            ) : (
              /* Dedicated Tiffins category view */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {tiffinItems.map(item => (
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    onAdd={handleAddItem}
                    onOpenComboBuilder={setComboItemToBuild}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Persistent Sticky Steel Tray + Chit Receipt (5 cols on desktop) */}
          <div 
            ref={trayContainerRef}
            className="hidden lg:block lg:col-span-5 lg:sticky lg:top-20 space-y-4"
          >
            {/* The Live Steel Tray Graphic sitting on the warm cream counter */}
            <div>
              <div className="flex items-center justify-between mb-2 px-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-udupi-display text-base font-bold text-[#2C1810]">
                    Your Live Stainless Tray
                  </h3>
                  <span className="text-[10px] font-mono-chit bg-[#EFE6D8] text-[#5C463A] border border-[#DCD0C0] px-2 py-0.5 rounded font-bold">
                    {totalItemCount} {totalItemCount === 1 ? 'ITEM' : 'ITEMS'}
                  </span>
                </div>

                {lines.length > 0 && (
                  <button
                    onClick={() => setLines([])}
                    className="text-[11px] text-[#B5562D] hover:underline font-mono-chit flex items-center gap-1 font-semibold"
                  >
                    <PixelIcon name="rotate" size={11} />
                    <span>Clear Tray</span>
                  </button>
                )}
              </div>

              {/* Steel Tray Graphic Visual Plate */}
              <SteelTrayGraphic
                lines={lines}
                onUpdateQty={handleUpdateQty}
                onRemoveLine={handleRemoveLine}
                onQuickAddFirst={handleQuickAddFirst}
              />
            </div>

            {/* Authentic Thermal Chit Receipt Summary (When tray has items) */}
            {lines.length > 0 && (
              <ChitReceipt
                lines={lines}
                subtotal={subtotal}
                totalSavings={totalSavings}
                selectedSlot={selectedSlot}
                onOpenSlotPicker={() => setIsSlotPickerOpen(true)}
                onReserve={handleReserve}
                isBudgetExceeded={isBudgetExceeded}
              />
            )}
          </div>
        </div>
      </main>

      {/* Mobile Sticky Bottom Sheet */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40">
        {/* Expanded Sheet Backdrop */}
        {isMobileTrayOpen && (
          <div
            onClick={() => setIsMobileTrayOpen(false)}
            className="fixed inset-0 bg-[#2C1810]/70 backdrop-blur-xs z-30"
          />
        )}

        {/* Peek / Expanded Sheet Body */}
        <div
          className="relative z-40 bg-[#FAF5EC] border-t-2 border-[#D5C4B0] shadow-2xl transition-all duration-300 rounded-t-3xl max-h-[85vh] flex flex-col text-[#2C1810]"
        >
          {/* Peek Bar */}
          <div
            onClick={() => setIsMobileTrayOpen(!isMobileTrayOpen)}
            className="px-5 py-3.5 bg-[#F3E7D6] text-[#2C1810] rounded-t-2xl flex items-center justify-between cursor-pointer border-b border-[#DECBB6]"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#FAF5EC] border border-[#D5C4B0] flex items-center justify-center text-[#B5562D]">
                <PixelIcon name="printer" size={14} />
              </div>
              <div>
                <span className="text-[10px] font-mono-chit uppercase tracking-wider text-[#6E574B] block leading-none">
                  {isMobileTrayOpen ? 'Tap to Collapse Platter' : 'Tap to View Stainless Tray'}
                </span>
                <span className="font-udupi-display font-bold text-sm text-[#2C1810]">
                  Tray: {totalItemCount} {totalItemCount === 1 ? 'item' : 'items'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="text-[9px] font-mono-chit text-[#6E574B] block leading-none">TOTAL</span>
                <Odometer value={subtotal + Math.round(subtotal * 0.05)} className="text-base font-mono-chit text-[#B5562D]" />
              </div>

              <div className="w-7 h-7 rounded-full bg-[#FAF5EC] flex items-center justify-center text-[#6E574B] border border-[#DECBB6]">
                {isMobileTrayOpen ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
              </div>
            </div>
          </div>

          {/* Expanded Tray & Chit Content */}
          {isMobileTrayOpen && (
            <div className="p-4 overflow-y-auto space-y-4 max-h-[70vh] bg-[#FAF5EC]">
              <SteelTrayGraphic
                lines={lines}
                onUpdateQty={handleUpdateQty}
                onRemoveLine={handleRemoveLine}
                onQuickAddFirst={handleQuickAddFirst}
              />

              <ChitReceipt
                lines={lines}
                subtotal={subtotal}
                totalSavings={totalSavings}
                selectedSlot={selectedSlot}
                onOpenSlotPicker={() => setIsSlotPickerOpen(true)}
                onReserve={handleReserve}
                isBudgetExceeded={isBudgetExceeded}
              />
            </div>
          )}
        </div>
      </div>

      {/* Interactive Combo Builder Modal */}
      {comboItemToBuild && (
        <ComboBuilderModal
          item={comboItemToBuild}
          isOpen={Boolean(comboItemToBuild)}
          onClose={() => setComboItemToBuild(null)}
          onAddCombo={handleAddCombo}
        />
      )}

      {/* 15-Minute Pickup Slot Picker Modal */}
      <PickupSlotPickerModal
        isOpen={isSlotPickerOpen}
        slots={slots}
        selectedSlot={selectedSlot}
        onSelectSlot={setSelectedSlot}
        onClose={() => setIsSlotPickerOpen(false)}
      />

      {/* Order Confirmation Token Modal */}
      <OrderConfirmationModal
        order={currentOrder}
        onClose={() => setCurrentOrder(null)}
        onNewOrder={handleNewOrder}
      />
    </div>
  );
}
