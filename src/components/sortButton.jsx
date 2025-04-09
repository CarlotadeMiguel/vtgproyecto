import React from 'react';

function SortButton({ direction, onClick }) {
    return (
        <>
            <button
                className="mi-boton bg-indigo-400 hover:bg-indigo-700 transition-colors flex items-center justify-center"
                onClick={onClick}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d={direction} />
                </svg>
            </button>
        </>
    )
}

export default SortButton;
