import React from 'react'

import './Pokedex.css'


const InputPesquisa = () => {

  const [input, setInput] = React.useState('')

  let pokeChosen = localStorage.getItem('pokeEscolhido')

  React.useEffect(() => {
   if (pokeChosen !== undefined) localStorage.setItem('pokeEscolhido', input)
   }, [input, pokeChosen])
 
    return (
      <div>
        <input
          type="text"
          value={input}
          onChange={({ target }) => setInput(target.value)} 
        />
      </div>
    )
}

export default InputPesquisa
