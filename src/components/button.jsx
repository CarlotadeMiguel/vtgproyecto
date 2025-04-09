import React from 'react';

function Button({ onClick, texto, className }) {
  return (
    <button className={className} onClick={onClick}>
      {texto}
    </button>
  );
}

export default Button;
