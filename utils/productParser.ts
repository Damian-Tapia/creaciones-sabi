// utils/productParser.ts
import { Product, ProductType, CategoryType } from '@/types/product';
import { availableProductImages } from '@/data/availableProducts';

/**
 * Mapeo de personajes a categorías
 * Películas de Disney/Pixar, videojuegos, series, etc.
 */
const characterCategoryMap: Record<string, CategoryType> = {
  // Películas Disney/Pixar
  'bella': 'movie',
  'cenicienta': 'movie',
  'blancanieves': 'movie',
  'sirenita': 'movie',
  'jazmin': 'movie',
  'mickey': 'movie',
  'minnie': 'movie',
  'daisy': 'movie',
  'goofy': 'movie',
  'patodonald': 'movie',
  'woody': 'movie',
  'buzz': 'movie',
  'jessie': 'movie',
  'nemo': 'movie',
  'dory': 'movie',
  'mike': 'movie',
  'sully': 'movie',
  'rayo': 'movie',
  'mate': 'movie',
  'msincreible': 'movie',
  'sindrome': 'movie',
  'pooh': 'movie',
  'piglet': 'movie',
  'tiger': 'movie',
  'stitch': 'movie',
  'pinocho': 'movie',
  'yepeto': 'movie',
  'pepegrillo': 'movie',
  'jack': 'movie',
  
  // Intensamente
  'felicidad': 'movie',
  'tristeza': 'movie',
  'enojo': 'movie',
  'miedo': 'movie',
  'ansiedad': 'movie',
  'admiracion': 'movie',
  'envidia': 'movie',
  'intensamente': 'movie',
  
  // Videojuegos
  'mario': 'videogame',
  'luigi': 'videogame',
  'bowser': 'videogame',
  'peach': 'videogame',
  'charmander': 'videogame',
  'venosaur': 'videogame',
  
  // Series/Comics
  'spiderman': 'series',
  'batman': 'series',
  'hulk': 'series',
  'capitan': 'series',
  'wolverine': 'series',
  'wonderwoman': 'series',
  'robin': 'series',
  'bobesponja': 'series',
  'patricio': 'series',
  'bluey': 'series',
  'pawpatrol': 'series',
  'pocoyo': 'series',
  'chavo8': 'series',
  'chilindrina': 'series',
  'chapulincolorado': 'series',
  'kenny': 'series',
  
  // Dragon Ball
  'bulma': 'series',
  'krilin': 'series',
  'picoro': 'series',
  
  // Las Chicas Superpoderosas
  'bellota': 'series',
  'bombon': 'series',
  'burbuja': 'series',
  
  // Looney Tunes
  'piolin': 'series',
  'silvestre': 'series',
  'patolucas': 'series',
  
  // Harry Potter
  'harry': 'movie',
  'hermione': 'movie',
  'ron': 'movie',
  
  // Blancanieves y los 7 enanitos
  'enano2': 'movie',
  'enano3': 'movie',
  'enano4': 'movie',
  'enano5': 'movie',
  'enano6': 'movie',
  
  // Baby Shark
  'shark': 'series',
  
  // Hello Kitty
  'hellokittie': 'generic',
  'kitty': 'generic',
  
  // Labubu
  'labubu': 'generic',
  
  // Garfield
  'garfield': 'series',
  
  // Muppets
  'mspiggy': 'series',
  'rito': 'series',
  'higor': 'series',
};

/**
 * Convierte el nombre del archivo a un nombre legible
 */
const formatCharacterName = (character: string): string => {
  const nameMap: Record<string, string> = {
    'bella': 'Bella',
    'bowser': 'Bowser',
    'cenicienta': 'Cenicienta',
    'hellokittie': 'Hello Kitty',
    'hermanosbros': 'Hermanos Bros',
    'mickey': 'Mickey Mouse',
    'monanaranja': 'Mona Naranja',
    'mono': 'Mono',
    'nino': 'Niño',
    'pinatasmonos': 'Piñatas Monos',
    'minero': 'Minero',
    'envidia': 'Envidia',
    'admiracion': 'Admiración',
    'ansiedad': 'Ansiedad',
    'batman': 'Batman',
    'bellota': 'Bellota',
    'blancanieves': 'Blancanieves',
    'bluey': 'Bluey',
    'bobesponja': 'Bob Esponja',
    'bombon': 'Bombón',
    'bulma': 'Bulma',
    'burbuja': 'Burbuja',
    'buzz': 'Buzz Lightyear',
    'capitan': 'Capitán América',
    'chapulincolorado': 'Chapulín Colorado',
    'charmander': 'Charmander',
    'chavo8': 'Chavo del 8',
    'chilindrina': 'Chilindrina',
    'conejo': 'Conejo',
    'daisy': 'Daisy',
    'dory': 'Dory',
    'enano2': 'Enano 2',
    'enano3': 'Enano 3',
    'enano4': 'Enano 4',
    'enano5': 'Enano 5',
    'enano6': 'Enano 6',
    'enojo': 'Enojo',
    'felicidad': 'Alegría',
    'garfield': 'Garfield',
    'gato': 'Gato',
    'goofy': 'Goofy',
    'harry': 'Harry Potter',
    'hermione': 'Hermione',
    'higor': 'Higor',
    'hulk': 'Hulk',
    'intensamente': 'Intensamente',
    'jack': 'Jack Skellington',
    'jazmin': 'Jazmín',
    'jessie': 'Jessie',
    'kenny': 'Kenny',
    'kitty': 'Kitty',
    'krilin': 'Krilin',
    'labubu': 'Labubu',
    'luigi': 'Luigi',
    'mario': 'Mario',
    'mate': 'Mate',
    'micky': 'Mickey',
    'miedo': 'Miedo',
    'mike': 'Mike Wazowski',
    'minnie': 'Minnie',
    'mona': 'Mona',
    'monanaranja2': 'Mona Naranja',
    'monaverde': 'Mona Verde',
    'monorojo': 'Mono Rojo',
    'msincreible': 'Mr. Increíble',
    'mspiggy': 'Miss Piggy',
    'naranja': 'Naranja',
    'nemo': 'Nemo',
    'nono': 'Nono',
    'patodonald': 'Pato Donald',
    'patolucas': 'Pato Lucas',
    'patricio': 'Patricio',
    'pawpatrol': 'Paw Patrol',
    'payaso': 'Payaso',
    'peach': 'Princesa Peach',
    'pepegrillo': 'Pepe Grillo',
    'pez': 'Pez',
    'picoro': 'Picoro',
    'piglet': 'Piglet',
    'pinocho': 'Pinocho',
    'piolin': 'Piolín',
    'pocoyo': 'Pocoyo',
    'pooh': 'Winnie Pooh',
    'princesa': 'Princesa',
    'principe': 'Príncipe',
    'randal': 'Randall',
    'rayo': 'Rayo McQueen',
    'rito': 'Rito',
    'robin': 'Robin',
    'ron': 'Ron Weasley',
    'shark': 'Baby Shark',
    'silvestre': 'Silvestre',
    'sindrome': 'Síndrome',
    'sirenita': 'La Sirenita',
    'spiderman': 'Spider-Man',
    'stitch': 'Stitch',
    'sully': 'Sully',
    'tiger': 'Tigger',
    'tristeza': 'Tristeza',
    'unicornio': 'Unicornio',
    'venosaur': 'Venusaur',
    'wolverine': 'Wolverine',
    'wonderwoman': 'Wonder Woman',
    'woody': 'Woody',
    'yepeto': 'Geppetto',
  };
  
  return nameMap[character.toLowerCase()] || character.charAt(0).toUpperCase() + character.slice(1);
};

/**
 * Parsea un nombre de archivo y extrae la información del producto
 */
const parseProductFromFilename = (filename: string): Product | null => {
  // Remover la extensión
  const nameWithoutExt = filename.replace('.jpeg', '');
  
  // Separar tipo y personaje
  const parts = nameWithoutExt.split('_');
  if (parts.length < 2) return null;
  
  const type = parts[0] as ProductType;
  const character = parts.slice(1).join('_');
  
  // Validar que sea un tipo válido
  if (!['combo', 'dulcero', 'pinata', 'decoracion'].includes(type)) {
    return null;
  }
  
  // Determinar categoría basada en el personaje
  const category = characterCategoryMap[character.toLowerCase()] || 'generic';
  
  const formattedName = formatCharacterName(character);
  
  return {
    id: nameWithoutExt,
    type,
    name: `${type === 'combo' ? 'Combo' : type === 'dulcero' ? 'Dulcero' : type === 'pinata' ? 'Piñata' : 'Decoración'} ${formattedName}`,
    character: formattedName,
    imagePath: `/products/${filename}`,
    category
  };
};

/**
 * Genera todos los productos desde el array de imágenes disponibles
 */
export const getAllProducts = (): Product[] => {
  return availableProductImages
    .map(parseProductFromFilename)
    .filter((product): product is Product => product !== null);
};

/**
 * Filtra productos por tipo
 */
export const getProductsByType = (type: ProductType): Product[] => {
  return getAllProducts().filter(product => product.type === type);
};

/**
 * Filtra productos por categoría
 */
export const getProductsByCategory = (category: CategoryType): Product[] => {
  return getAllProducts().filter(product => product.category === category);
};

/**
 * Filtra productos por tipo y categoría
 */
export const getProductsByTypeAndCategory = (
  type: ProductType | 'all',
  category: CategoryType | 'all'
): Product[] => {
  let products = getAllProducts();
  
  if (type !== 'all') {
    products = products.filter(p => p.type === type);
  }
  
  if (category !== 'all') {
    products = products.filter(p => p.category === category);
  }
  
  return products;
};