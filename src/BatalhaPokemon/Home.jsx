import React, { useEffect } from 'react'
import CardPokemon from './CardPokemon'
import './Card.css'

const Home = ({dataPoke}) => {

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
    <div className="container">
      <div className="centralCard">
        <button onClick={handleClick}>GERAR</button>
        {dados && <CardPokemon nomePoke={dados}/>}
      </div>
    </div>
  </>
  )
}

export default Home
