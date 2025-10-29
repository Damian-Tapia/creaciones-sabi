export type ProductType = 'combo' | 'dulcero' | 'pinata' | 'decoracion';
export type CategoryType = 'movie' | 'videogame' | 'series' | 'generic';

export interface Product {
  id: string;
  type: ProductType;
  name: string;
  character: string; // Nombre del personaje extraído del filename
  imagePath: string;
  category: CategoryType;
}