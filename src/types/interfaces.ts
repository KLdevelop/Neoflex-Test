export type ItemTag = 'headphones' | 'wireless';

export interface ItemCardData {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  pastPrice?: number;
  rating: number;
  tag: ItemTag;
}

export interface CartItem {
  item: ItemCardData;
  count: number;
}

export interface Cart {
  items: Record<number, CartItem>;
}

export type Language = 'rus' | 'eng';
