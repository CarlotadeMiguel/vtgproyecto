import React from 'react';

function SortButton({ direction, onClick }) {
    return (
        <>
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors flex items-center justify-center"
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
