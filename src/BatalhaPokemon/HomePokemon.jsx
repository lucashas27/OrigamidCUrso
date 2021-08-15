import React from 'react'
import Pokedex from './Pokedex'
import './Pokedex.css'
import InputPesquisa from './InputPesquisa'

const HomePokemon = ({dataPoke}) => {

  const [dados, setDados] = React.useState('') 

  async function handleClick(event) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${dataPoke}`
    );
    const json = await response.json();
    setDados(json);
  }

  return (
  <>
  
      <InputPesquisa />
      <div className="centralCard">
        <button onClick={handleClick}>GERAR</button>
      </div>        
      <Pokedex dadosPoke={dados} />
  </>
  )
}

export default HomePokemon
