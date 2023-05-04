export type ItemTag = 'headphones' | 'wireless';

export interface ItemCardData {
  imageUrl: string;
  name: string;
  price: number;
  pastPrice?: number;
  rating: number;
  tag: ItemTag;
}
