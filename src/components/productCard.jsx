import React from 'react';
import { useState } from 'react';

function ProductCard({ product }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm mx-auto">
      <img
        src={product.imagen}
        alt={product.nombre}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{product.nombre}</h3>
        <p className="text-gray-600 mt-2">${product.precio.toFixed(2)}</p>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handleLike}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Me gusta ({likes})
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;