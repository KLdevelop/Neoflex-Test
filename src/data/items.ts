import { ItemCardData } from 'src/types/interfaces';
import { borofone, byz, airPods, earPods, earPods1, gerlax } from 'src/assets/images';

const items: ItemCardData[] = [
  {
    id: 0,
    imageUrl: byz,
    name: 'Apple BYZ S852I',
    price: 2927,
    pastPrice: 3527,
    rating: 4.7,
    tag: 'headphones',
  },
  {
    id: 1,
    imageUrl: earPods,
    name: 'Apple EarPods',
    price: 2327,
    rating: 4.5,
    tag: 'headphones',
  },
  {
    id: 2,
    imageUrl: earPods1,
    name: 'Apple EarPods',
    price: 2327,
    rating: 4.5,
    tag: 'headphones',
  },
  {
    id: 3,
    imageUrl: byz,
    name: 'Apple BYZ S852I',
    price: 2927,
    pastPrice: 3527,
    rating: 4.7,
    tag: 'headphones',
  },
  {
    id: 4,
    imageUrl: earPods,
    name: 'Apple EarPods',
    price: 2327,
    rating: 4.5,
    tag: 'headphones',
  },
  {
    id: 5,
    imageUrl: earPods1,
    name: 'Apple EarPods',
    price: 2327,
    rating: 4.5,
    tag: 'headphones',
  },
  {
    id: 6,
    imageUrl: airPods,
    name: 'Apple AirPods',
    price: 9527,
    rating: 4.7,
    tag: 'wireless',
  },
  {
    id: 7,
    imageUrl: gerlax,
    name: 'GERLAX GH-04',
    price: 6527,
    rating: 4.7,
    tag: 'wireless',
  },
  {
    id: 8,
    imageUrl: borofone,
    name: 'BOROFONE BO4',
    price: 7527,
    rating: 4.7,
    tag: 'wireless',
  },
];

export default items;
