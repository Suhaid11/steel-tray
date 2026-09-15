export type MenuItemCategory = 'tiffin' | 'combo' | 'side' | 'drink';

export interface ComboOptionItem {
  id: string;
  name: string;
  kannadaName?: string;
  price: number;
  description?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  kannadaName: string;
  category: MenuItemCategory;
  price: number;
  description: string;
  isFreshHot?: boolean;
  isComboBase?: boolean;
  comboOptions?: {
    bases?: ComboOptionItem[];
    chutneys: ComboOptionItem[];
    sides: ComboOptionItem[];
    drinks: ComboOptionItem[];
  };
  bundleDiscount?: number;
  traySection: 'main' | 'katori-1' | 'katori-2' | 'tumbler';
  visualType: 
    | 'goli-baje' 
    | 'neer-dosa' 
    | 'sanna' 
    | 'kori-rotti' 
    | 'buns' 
    | 'filter-coffee' 
    | 'kempu-chutney' 
    | 'hasi-chutney' 
    | 'sambar' 
    | 'beverage'
    | 'combo-raja';
}

export interface ComboSelection {
  base: ComboOptionItem;
  chutney: ComboOptionItem;
  side: ComboOptionItem;
  drink: ComboOptionItem;
  individualTotal: number;
  bundlePrice: number;
  savings: number;
}

export interface TrayLine {
  id: string;
  itemId: string;
  name: string;
  kannadaName?: string;
  quantity: number;
  unitPrice: number;
  lineTotal: number;
  comboSelection?: ComboSelection;
  traySection: 'main' | 'katori-1' | 'katori-2' | 'tumbler';
  visualType: string;
  addedAt: number;
}

export interface PickupSlot {
  id: string;
  time: string; // e.g. "7:15 AM"
  targetTimeMs: number; // For live countdown calculation
  capacity: number;
  taken: number;
  isFillingFast?: boolean;
}

export interface OrderConfirmation {
  orderId: string;
  tokenNumber: string;
  createdAt: string;
  pickupSlot: PickupSlot;
  items: TrayLine[];
  subtotal: number;
  savings: number;
  gst: number;
  total: number;
  instructions: string;
}
