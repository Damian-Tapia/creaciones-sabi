"use client"

import { useState } from 'react';
import { Film, Gamepad2, Search } from 'lucide-react';
import '../styles/themecatalog.scss';

interface Theme {
  id: string;
  name: string;
  category: 'movie' | 'videogame' | 'series';
  logo: string;
  slug: string;
}

interface ThemesCatalogProps {
  themes?: Theme[];
  onThemeClick?: (slug: string) => void;
}

const ThemesCatalog = ({ themes, onThemeClick }: ThemesCatalogProps) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'movie' | 'videogame' | 'series'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const defaultThemes: Theme[] = [
    { id: '1', name: 'Máscara de Látex', category: 'movie', logo: '/themes/latex-mask.svg', slug: 'mascara-latex' },
    { id: '2', name: 'Nightmare Before Christmas', category: 'movie', logo: '/themes/nightmare.svg', slug: 'nightmare' },
    { id: '3', name: 'Disney', category: 'movie', logo: '/themes/disney.svg', slug: 'disney' },
    { id: '4', name: 'Chainsaw Man', category: 'series', logo: '/themes/chainsaw-man.svg', slug: 'chainsaw-man' },
    { id: '5', name: 'Dragon Ball', category: 'series', logo: '/themes/dragon-ball.svg', slug: 'dragon-ball' },
    { id: '6', name: 'Marvel', category: 'movie', logo: '/themes/marvel.svg', slug: 'marvel' },
    { id: '7', name: 'BT21', category: 'series', logo: '/themes/bt21.svg', slug: 'bt21' },
    { id: '8', name: 'Fantastic Four', category: 'movie', logo: '/themes/fantastic-four.svg', slug: 'fantastic-four' },
    { id: '9', name: 'Star Wars', category: 'movie', logo: '/themes/star-wars.svg', slug: 'star-wars' },
    { id: '10', name: 'Lilo & Stitch', category: 'movie', logo: '/themes/lilo-stitch.svg', slug: 'lilo-stitch' },
    { id: '11', name: 'Thunderbolts', category: 'movie', logo: '/themes/thunderbolts.svg', slug: 'thunderbolts' },
    { id: '12', name: 'Daredevil', category: 'series', logo: '/themes/daredevil.svg', slug: 'daredevil' },
    { id: '13', name: 'Marvel Rivals', category: 'videogame', logo: '/themes/rivals.svg', slug: 'marvel-rivals' },
    { id: '14', name: 'Captain America', category: 'movie', logo: '/themes/captain-america.svg', slug: 'captain-america' },
    { id: '15', name: 'Spider-Man', category: 'movie', logo: '/themes/spiderman.svg', slug: 'spiderman' },
    { id: '16', name: 'El Juego del Calamar', category: 'series', logo: '/themes/squid-game.svg', slug: 'squid-game' },
    { id: '17', name: 'Demon Slayer', category: 'series', logo: '/themes/demon-slayer.svg', slug: 'demon-slayer' },
    { id: '18', name: 'The Simpsons', category: 'series', logo: '/themes/simpsons.svg', slug: 'simpsons' },
    { id: '19', name: 'Jujutsu Kaisen', category: 'series', logo: '/themes/jujutsu-kaisen.svg', slug: 'jujutsu-kaisen' },
    { id: '20', name: 'X-Men 97', category: 'series', logo: '/themes/xmen-97.svg', slug: 'xmen-97' },
    { id: '21', name: 'Deadpool & Wolverine', category: 'movie', logo: '/themes/deadpool-wolverine.svg', slug: 'deadpool-wolverine' },
  ];

  const themesList = themes || defaultThemes;

  const filteredThemes = themesList.filter(theme => {
    const matchesFilter = activeFilter === 'all' || theme.category === activeFilter;
    const matchesSearch = theme.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleThemeClick = (slug: string) => {
    if (onThemeClick) {
      onThemeClick(slug);
    } else {
      // Redirección por defecto
      window.location.href = `/catalogo/${slug}`;
    }
  };

  return (
    <section className="themes-catalog">
      <div className="themes-catalog__container">
        {/* Header */}
        <div className="themes-catalog__header">
          <h2 className="themes-catalog__title">
            Explora Nuestros <span className="themes-catalog__title-highlight">Productos</span>
          </h2>
          <p className="themes-catalog__subtitle">
            Encuentra el tema perfecto para tu celebración
          </p>
        </div>

        {/* Filters */}
        <div className="themes-catalog__controls">
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

          <div className="search-box">
            <Search className="search-box__icon" />
            <input
              type="text"
              className="search-box__input"
              placeholder="Buscar tema..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Themes Grid */}
        <div className="themes-grid">
          {filteredThemes.map((theme) => (
            <button
              key={theme.id}
              className="theme-card"
              onClick={() => handleThemeClick(theme.slug)}
            >
              <div className="theme-card__logo-wrapper">
                <img
                  src={theme.logo}
                  alt={theme.name}
                  className="theme-card__logo"
                  onError={(e) => {
                    e.currentTarget.src = '/api/placeholder/200/100';
                  }}
                />
              </div>
              <div className="theme-card__overlay">
                <span className="theme-card__name">{theme.name}</span>
              </div>
            </button>
          ))}
        </div>

        {filteredThemes.length === 0 && (
          <div className="themes-catalog__empty">
            <p className="themes-catalog__empty-text">
              No se encontraron temas que coincidan con tu búsqueda
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ThemesCatalog;