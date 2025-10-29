"use client"

import { useState, useMemo } from 'react';
import { Film, Gamepad2, Search, Tv, Package, ArrowLeft } from 'lucide-react';
import { Product, ProductType, CategoryType } from '@/types/product';
import { getAllProducts, getProductsByTypeAndCategory } from '@/utils/productParser';
import { ProductCard } from '../ProductCard/ProductCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ProductsCatalogProps {
  onProductClick?: (product: Product) => void;
}

const ProductsCatalog = ({ onProductClick }: ProductsCatalogProps) => {
  const [categoryFilter, setCategoryFilter] = useState<CategoryType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [productTypeFilter, setProductTypeFilter] = useState<ProductType | 'all'>('all');

  // Obtener todos los productos
  const allProducts = useMemo(() => getAllProducts(), []);

  // Filtrar productos
  const filteredProducts = useMemo(() => {
    let products = getProductsByTypeAndCategory(productTypeFilter, categoryFilter);
    
    // Aplicar búsqueda
    if (searchQuery.trim()) {
      products = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.character.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return products;
  }, [productTypeFilter, categoryFilter, searchQuery]);

  // Contar productos por categoría
  const counts = useMemo(() => {
    return {
      all: allProducts.length,
      movie: allProducts.filter(p => p.category === 'movie').length,
      videogame: allProducts.filter(p => p.category === 'videogame').length,
      series: allProducts.filter(p => p.category === 'series').length,
      combo: allProducts.filter(p => p.type === 'combo').length,
      dulcero: allProducts.filter(p => p.type === 'dulcero').length,
      pinata: allProducts.filter(p => p.type === 'pinata').length,
    };
  }, [allProducts]);

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <section className="themes-catalog">
      <div className="themes-catalog__container">
        <Link href="/">
          <Button variant="glass" size="lg">Regresar al Inicio</Button>
        </Link>


        {/* Header */}
        <div className="themes-catalog__header">
          <h2 className="themes-catalog__title">
            Explora Nuestros <span className="themes-catalog__title-highlight">Productos</span>
          </h2>
          <p className="themes-catalog__subtitle">
            {counts.all} productos disponibles - Encuentra el perfecto para tu celebración
          </p>
        </div>

        {/* Filters */}
        <div className="themes-catalog__controls">
          {/* Filtro de categoría (Películas, Videojuegos, Series) */}
          <div className="filter-tabs">
            <button
              className={`filter-tabs__button ${categoryFilter === 'all' ? 'filter-tabs__button--active' : ''}`}
              onClick={() => setCategoryFilter('all')}
            >
              <Package className="filter-tabs__icon" />
              Todos ({counts.all})
            </button>
            <button
              className={`filter-tabs__button ${categoryFilter === 'movie' ? 'filter-tabs__button--active' : ''}`}
              onClick={() => setCategoryFilter('movie')}
            >
              <Film className="filter-tabs__icon" />
              Películas ({counts.movie})
            </button>
            <button
              className={`filter-tabs__button ${categoryFilter === 'videogame' ? 'filter-tabs__button--active' : ''}`}
              onClick={() => setCategoryFilter('videogame')}
            >
              <Gamepad2 className="filter-tabs__icon" />
              Videojuegos ({counts.videogame})
            </button>
            <button
              className={`filter-tabs__button ${categoryFilter === 'series' ? 'filter-tabs__button--active' : ''}`}
              onClick={() => setCategoryFilter('series')}
            >
              <Tv className="filter-tabs__icon" />
              Series ({counts.series})
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
              Combos ({counts.combo})
            </button>
            <button
              className={`filter-tabs__button ${productTypeFilter === 'dulcero' ? 'filter-tabs__button--active' : ''}`}
              onClick={() => setProductTypeFilter('dulcero')}
            >
              Dulceros ({counts.dulcero})
            </button>
            <button
              className={`filter-tabs__button ${productTypeFilter === 'pinata' ? 'filter-tabs__button--active' : ''}`}
              onClick={() => setProductTypeFilter('pinata')}
            >
              Piñatas ({counts.pinata})
            </button>
          </div>

          {/* Search */}
          <div className="search-box">
            <Search className="search-box__icon" />
            <input
              type="text"
              className="search-box__input"
              placeholder="Buscar personaje o producto..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="themes-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={onProductClick}
            />
          ))}
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

export default ProductsCatalog;