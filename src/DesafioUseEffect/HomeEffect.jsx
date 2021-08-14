import React, { useEffect } from 'react'
import ProdutoFetch from './ProdutoFetch'

const HomeEffect = () => {

  const [produto, setProdutos] = React.useState(null)

  async function handleClick(event) {

      const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
      );
      const json = await response.json();
      setProdutos(json);

  }

  useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== null) localStorage.setItem('produto', produto?.nome)
  }, []);


  // o [dados] indica que o efeito só irá acontecer quando a constante dados for executada
  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto.nome);
  }, [produto]);

    return (
      <div>
        <div>
          <button onClick={handleClick}>Smartphone</button>
          <button onClick={handleClick}>Notebook</button>
          <button onClick={handleClick}>Tablet</button>
           <ProdutoFetch dados={produto}/>
        </div>
      </div>
    )
}

export default HomeEffect
