import './App.css';
import { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import ProductCard from './components/productCard';
import SearchBar from './components/searchBar';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

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
  ];
  const filteredProducts = productos.filter((product) =>
    product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <Header />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {filteredProducts.length > 0 ? (
          <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </main>
        ) : (
          <p className="text-center text-gray-500">No se encontraron productos.</p>
        )}
        <Footer />
      </div>
    </>
  )
}

export default App;