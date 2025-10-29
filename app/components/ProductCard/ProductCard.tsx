"use client"

import { useState } from 'react';
import { Product } from '@/types/product';
import './ProductCard.scss';
interface ProductCardProps {
  product: Product;
  onClick?: (product: Product) => void;
}

export const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div 
      className="product-card"
      onClick={() => onClick?.(product)}
    >
      <div className="product-card__image-wrapper">
        {!imageError ? (
          <img
            src={product.imagePath}
            alt={product.name}
            className="product-card__image"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="product-card__placeholder">
            <span>Imagen no disponible</span>
          </div>
        )}
      </div>
      <div className="product-card__info">
        <h3 className="product-card__title">{product.name}</h3>
        <span className="product-card__type">{product.type}</span>
      </div>
    </div>
  );
};