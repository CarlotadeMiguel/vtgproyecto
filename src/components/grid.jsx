import React from 'react';

function Grid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            <div className="bg-gray-200 p-4 rounded-lg">Item 1</div>
            <div className="bg-gray-200 p-4 rounded-lg">Item 2</div>
            <div className="bg-gray-200 p-4 rounded-lg">Item 3</div>
            <div className="bg-gray-200 p-4 rounded-lg">Item 4</div>
        </div>
    )
}

export default Grid;
