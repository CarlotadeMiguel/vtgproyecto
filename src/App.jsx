import './App.css';
import { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import ProductCard from './components/productCard';
import SearchBar from './components/searchBar';
import SortButton from './components/sortButton';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const productos = [
    {
      id: 1,
      nombre: 'Camiseta',
      precio: 19.99,
      imagen: 'https://picsum.photos/151',
    },
    {
      id: 2,
      nombre: 'Pantalón',
      precio: 29.99,
      imagen: 'https://picsum.photos/155',
    },
    {
      id: 3,
      nombre: 'Zapatos',
      precio: 49.99,
      imagen: 'https://picsum.photos/153',
    },
    {
      id: 4,
      nombre: 'Camisa',
      precio: 19.99,
      imagen: 'https://picsum.photos/161',
    },
    {
      id: 5,
      nombre: 'Pantalones',
      precio: 29.99,
      imagen: 'https://picsum.photos/159',
    },
    {
      id: 6,
      nombre: 'Zapatillas',
      precio: 49.99,
      imagen: 'https://picsum.photos/157',
    },
  ];

  const [filteredProducts, setFilteredProducts] = useState(productos);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setFilteredProducts(
      productos.filter((product) =>
        product.nombre.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  const handleSort = (order) => {
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (order === 'asc') {
        return a.precio - b.precio;
      } else {
        return b.precio - a.precio;
      }
    });
    setFilteredProducts(sortedProducts);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 p-6">

        <div className="flex justify-between items-center mb-4">
          <SearchBar searchTerm={searchTerm} onChange={(e) => handleSearch(e.target.value)} />
          <div className="flex space-x-2 mt-4 md:mt-0">
            <SortButton direction='M4.5 15.75l7.5-7.5 7.5 7.5' onClick={() => handleSort('asc')} />
            <SortButton direction='M19.5 8.25l-7.5 7.5-7.5-7.5' onClick={() => handleSort('desc')} />
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </main>
        ) : (
          <p className="text-center text-gray-500">No se encontraron productos.</p>
        )}

      </div >
      <Footer />
    </>
  )
}

export default App;