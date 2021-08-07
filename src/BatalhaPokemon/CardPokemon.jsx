import React from 'react'
import './Card.css'

const CardPokemon = ({nomePoke}) => {

    const [moveOne, setMoveOne] = React.useState('')
    const [resetMove, setResetMove] = React.useState(false)

  async function handleClick(event) {
    setResetMove(true)
    const response = await fetch(
      `${nomePoke.abilities[0].ability.url}`
    );
    const json = await response.json();
    setMoveOne(json);
    setResetMove(false)
  }

    return (
        <div className="cardPokemon">
            <p>{nomePoke.name}</p>
            <p>Type: {nomePoke.types[0].type.name} </p>
            <button onClick={handleClick}>{nomePoke.abilities[0].ability.name}</button>
            <img src={nomePoke.sprites.front_default} alt={nomePoke.sprites.front_default} />
            {/* {resetMove && 'Carregando...'}
            {!resetMove && moveOne.effect_entries[0].effect} */}
        </div>
    )
}

export default CardPokemon
