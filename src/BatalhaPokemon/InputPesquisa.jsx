import React from 'react'
import Home from './Home.jsx'
import Header from '../components/Header'

const InputPesquisa = () => {

  const [chosenPoke, setChosenPoke] = React.useState('')
  const [input, setInput] = React.useState('')

  function savePokemon() {
    setChosenPoke([input])
  }

  let pokeChosen = localStorage.getItem('pokeEscolhido')

  React.useEffect(() => {
   if (pokeChosen !== undefined) localStorage.setItem('pokeEscolhido', input)
   }, [input, pokeChosen])
 

    return (
      <div>
        <Header />
        <input
          type="text"
          value={input}
          onChange={({ target }) => setInput(target.value)} 
        />
        <button type="submit" onClick={savePokemon}>Guardar Pokemon</button>
        <Home dataPoke={pokeChosen} />
      </div>
    )
}

export default InputPesquisa
