import React from 'react';

const Pokemon = () => {
  const [dados, setDados] = React.useState(null);

  async function getPoke(event) {

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/pikachu`,
    );
    const json = await response.json();
    setDados(json);
  }

  return (
    <>
      <button onClick={getPoke}>Gerar Pokemon</button>
      <p> {dados}</p>
    </>
  );
};

export default Pokemon