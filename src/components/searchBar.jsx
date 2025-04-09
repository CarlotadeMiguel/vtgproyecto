import React from 'react';

function SearchBar({ searchTerm, onChange }) {
    return (
        <input
            type="text"
            value={searchTerm}
            onChange={onChange}
            placeholder="Buscar productos..."
            className="w-full p-2 border border-gray-300 rounded"
        />
    );
}
export default SearchBar;