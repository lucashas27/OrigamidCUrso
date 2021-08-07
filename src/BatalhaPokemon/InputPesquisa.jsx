import React from 'react'
import Home from './Home.jsx'
import Header from '../components/Header'

const InputPesquisa = () => {

  const [input, setInput] = React.useState('')

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
        <Home dataPoke={input} />
      </div>
    )
}

export default InputPesquisa
