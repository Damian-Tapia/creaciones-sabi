// utils/productLoader.ts

import { ProductType, Theme, Product } from "@/types/product";

/**
 * Genera la ruta de imagen del producto basado en la convención de nombres
 * @param type - Tipo de producto (combo, dulcero, pinata)
 * @param themeSlug - Slug del tema
 * @returns Ruta completa a la imagen
 */
export const getProductImagePath = (type: ProductType, themeSlug: string): string => {
  return `/products/${type}_${themeSlug}.png`;
};

/**
 * Genera todos los productos disponibles para un tema específico
 * @param theme - Objeto del tema con información de productos disponibles
 * @returns Array de productos disponibles
 */
export const getThemeProducts = (theme: Theme): Product[] => {
  const products: Product[] = [];
  
  if (theme.hasCombo) {
    products.push({
      id: `${theme.slug}-combo`,
      type: 'combo',
      name: `Combo ${theme.name}`,
      themeSlug: theme.slug,
      imagePath: getProductImagePath('combo', theme.slug)
    });
  }
  
  if (theme.hasDulcero) {
    products.push({
      id: `${theme.slug}-dulcero`,
      type: 'dulcero',
      name: `Dulcero ${theme.name}`,
      themeSlug: theme.slug,
      imagePath: getProductImagePath('dulcero', theme.slug)
    });
  }
  
  if (theme.hasPinata) {
    products.push({
      id: `${theme.slug}-pinata`,
      type: 'pinata',
      name: `Piñata ${theme.name}`,
      themeSlug: theme.slug,
      imagePath: getProductImagePath('pinata', theme.slug)
    });
  }
  
  return products;
};

/**
 * Hook para verificar si una imagen existe
 * Útil para detectar automáticamente productos disponibles
 */
export const checkImageExists = async (imagePath: string): Promise<boolean> => {
  try {
    const response = await fetch(imagePath, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

/**
 * Detecta automáticamente qué productos tiene disponibles un tema
 * @param themeSlug - Slug del tema a verificar
 * @returns Objeto con flags de disponibilidad
 */
export const detectAvailableProducts = async (themeSlug: string) => {
  const [hasCombo, hasDulcero, hasPinata] = await Promise.all([
    checkImageExists(getProductImagePath('combo', themeSlug)),
    checkImageExists(getProductImagePath('dulcero', themeSlug)),
    checkImageExists(getProductImagePath('pinata', themeSlug))
  ]);
  
  return { hasCombo, hasDulcero, hasPinata };
};
