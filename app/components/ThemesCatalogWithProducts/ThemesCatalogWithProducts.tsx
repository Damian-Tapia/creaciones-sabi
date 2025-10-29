"use client"

import { useState, useMemo, useEffect } from 'react';
import { Film, Gamepad2, Search } from 'lucide-react';
import { Theme, Product, ProductType } from '@/types/product';
import { getThemeProducts, detectAvailableProducts } from '@/utils/productLoader';
import { ProductCard } from '../ProductCard/ProductCard';
import { themesWithProducts } from '@/data/themes'; // Importar los temas
import './ThemesCatalogWithProducts.scss';

interface ThemesCatalogWithProductsProps {
  themes?: Theme[]; // Hacemos themes opcional
  onProductClick?: (product: Product) => void;
  autoDetectProducts?: boolean; // Nueva prop para activar auto-detección
}

const ThemesCatalogWithProducts = ({ 
  themes, // Si no se pasa, usaremos themesWithProducts por defecto
  onProductClick,
  autoDetectProducts = false // Por defecto usa los flags manuales
}: ThemesCatalogWithProductsProps) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'movie' | 'videogame' | 'series'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [productTypeFilter, setProductTypeFilter] = useState<'all' | ProductType>('all');
  const [detectedThemes, setDetectedThemes] = useState<Theme[]>([]);
  const [isDetecting, setIsDetecting] = useState(false);

  // Usar themes pasado por props o el array por defecto
  const baseThemes = themes || themesWithProducts;

  // Auto-detectar productos si está activado
  useEffect(() => {
    if (!autoDetectProducts) {
      setDetectedThemes(baseThemes);
      return;
    }

    const detectProducts = async () => {
      setIsDetecting(true);
      const themesWithDetectedProducts = await Promise.all(
        baseThemes.map(async (theme) => {
          const detected = await detectAvailableProducts(theme.slug);
          return {
            ...theme,
            ...detected
          };
        })
      );
      setDetectedThemes(themesWithDetectedProducts);
      setIsDetecting(false);
    };

    detectProducts();
  }, [autoDetectProducts, baseThemes]);

  // Usar los temas detectados o los base
  const themesList = autoDetectProducts ? detectedThemes : baseThemes;

  // Genera todos los productos basados en los temas disponibles
  const allProducts = useMemo(() => {
    // Validación adicional por seguridad
    if (!themesList || themesList.length === 0) return [];
    return themesList.flatMap(theme => getThemeProducts(theme));
  }, [themesList]);

  // Filtra productos según los criterios seleccionados
  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const theme = themesList.find(t => t.slug === product.themeSlug);
      if (!theme) return false;

      const matchesCategory = activeFilter === 'all' || theme.category === activeFilter;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesProductType = productTypeFilter === 'all' || product.type === productTypeFilter;

      return matchesCategory && matchesSearch && matchesProductType;
    });
  }, [allProducts, themesList, activeFilter, searchQuery, productTypeFilter]);

  return (
    <section className="themes-catalog">
      <div className="themes-catalog__container">
        {/* Header */}
        <div className="themes-catalog__header">
          <h2 className="themes-catalog__title">
            Explora Nuestros <span className="themes-catalog__title-highlight">Productos</span>
          </h2>
          <p className="themes-catalog__subtitle">
            Encuentra el producto perfecto para tu celebración
          </p>
        </div>

        {/* Filters */}
        <div className="themes-catalog__controls">
          {/* Filtro de categoría de tema */}
          <div className="filter-tabs">
            <button
              className={`filter-tabs__button ${activeFilter === 'all' ? 'filter-tabs__button--active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              Todos
            </button>
            <button
              className={`filter-tabs__button ${activeFilter === 'movie' ? 'filter-tabs__button--active' : ''}`}
              onClick={() => setActiveFilter('movie')}
            >
              <Film className="filter-tabs__icon" />
              Películas
            </button>
            <button
              className={`filter-tabs__button ${activeFilter === 'videogame' ? 'filter-tabs__button--active' : ''}`}
              onClick={() => setActiveFilter('videogame')}
            >
              <Gamepad2 className="filter-tabs__icon" />
              Videojuegos
            </button>
            <button
              className={`filter-tabs__button ${activeFilter === 'series' ? 'filter-tabs__button--active' : ''}`}
              onClick={() => setActiveFilter('series')}
            >
              <Film className="filter-tabs__icon" />
              Series
            </button>
          </div>

          {/* Filtro de tipo de producto */}
          <div className="filter-tabs">
            <button
              className={`filter-tabs__button ${productTypeFilter === 'all' ? 'filter-tabs__button--active' : ''}`}
              onClick={() => setProductTypeFilter('all')}
            >
              Todos los productos
            </button>
            <button
              className={`filter-tabs__button ${productTypeFilter === 'combo' ? 'filter-tabs__button--active' : ''}`}
              onClick={() => setProductTypeFilter('combo')}
            >
              Combos
            </button>
            <button
              className={`filter-tabs__button ${productTypeFilter === 'dulcero' ? 'filter-tabs__button--active' : ''}`}
              onClick={() => setProductTypeFilter('dulcero')}
            >
              Dulceros
            </button>
            <button
              className={`filter-tabs__button ${productTypeFilter === 'pinata' ? 'filter-tabs__button--active' : ''}`}
              onClick={() => setProductTypeFilter('pinata')}
            >
              Piñatas
            </button>
          </div>

          {/* Search */}
          <div className="search-box">
            <Search className="search-box__icon" />
            <input
              type="text"
              className="search-box__input"
              placeholder="Buscar producto..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="themes-grid">
          {isDetecting ? (
            <div className="themes-catalog__loading">
              <p>Detectando productos disponibles...</p>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={onProductClick}
              />
            ))
          )}
        </div>

        {filteredProducts.length === 0 && (
          <div className="themes-catalog__empty">
            <p className="themes-catalog__empty-text">
              No se encontraron productos que coincidan con tu búsqueda
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ThemesCatalogWithProducts;