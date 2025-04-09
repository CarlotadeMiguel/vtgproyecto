import React from 'react';

function Button() {
  return (
    <>
      <div class="container py-10 px-10 mx-0 min-w-full flex flex-col gap-4 items-center">
        <button className="mi-boton bg-blue-500 hover:bg-blue-600">
          Azul
        </button>
        <button className="mi-boton bg-green-500 hover:bg-green-600">
          Verde
        </button>
      </div>
    </>
  )
}

export default Button;
