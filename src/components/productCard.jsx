import React from 'react';
import Button from './button';
import { useState } from 'react';

function ProductCard({ product }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleAddToCart = (producto) => {
    console.log(`Producto ${producto} añadido al carrito`);
  }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm mx-auto w-full sm:w-80 md:w-96 lg:w-[500px]">
      <img
        src={product.imagen}
        alt={product.nombre}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{product.nombre}</h3>
        <p className="text-gray-600 mt-2">${product.precio.toFixed(2)}</p>
        <div className="flex justify-between items-center mt-4">
          <Button
            onClick={handleLike}
            texto={`Me gusta ${likes}`}
            className="mi-boton bg-indigo-400 hover:bg-indigo-700 transition"
          />

          <Button
            onClick={() => handleAddToCart(product.nombre)}
            texto={`Añadir al carrito`}
            className="mi-boton bg-indigo-400 hover:bg-indigo-700 transition"
          />
        </div>
      </div>
    </div>
  );
}
export default ProductCard;