import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div className="m-4">
            <h2 className="text-lg font-semibold mb-2">Buscar Productos</h2>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar productos..."
                className="w-full p-2 border border-gray-300 rounded"
            />
        </div>
    );
}
export default SearchBar;