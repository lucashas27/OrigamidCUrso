import React from 'react';


const Produto = ({ dados }) => {

  return (
    <div>
      <h1>{dados}</h1>
      {/* <p>R$ {dados.preco}</p> */}
      {/* <img src={dados.sprites.front_default} alt={dados.sprites.front_default} /> */}
    </div>
  );
};

export default Produto;