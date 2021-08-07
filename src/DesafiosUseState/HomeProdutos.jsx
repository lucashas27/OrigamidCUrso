import React from 'react'
import Produto from './Produto';

const HomeProdutos = () => {

const [dados, setDados] = React.useState('')
const [carregando, setCarregando] = React.useState('')


  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

    return (
        <div>
          <button onClick={handleClick}>Smartphone</button>
          <button onClick={handleClick}>Notebook</button>
          <button onClick={handleClick}>Tablet</button>
          {carregando && <p>Carregando...</p>}
          {!carregando && dados && <Produto dados={dados} />}
        </div>
    )
}

export default HomeProdutos
