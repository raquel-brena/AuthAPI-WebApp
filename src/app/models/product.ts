interface Stock {
  on_hand: number;
  to_be_receveid: number;
  to_be_packed: number;
}

interface ActionRecord {
  author: string;
  action: string;
}

interface Note {
  author: string;
  message: string;
}

export interface Product {
  name: string;
  description?: string;
  variants: number;
  gender: 'male' | 'female' | 'unisex';
  retail_price: number;
  wholesale_price: number;
  category: string;
  status: 'active' | 'inactive' | 'draft';
  barcode: string;
  unit: 'each' | 'pack';
  sku: string;
  stock: Stock;
  history: ActionRecord[];
  notes: Note[];
}
