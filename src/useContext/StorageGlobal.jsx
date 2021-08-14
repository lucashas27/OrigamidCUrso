import React from 'react'

export const GlobalContext = React.createContext()

export const StorageGlobal = ({ children }) => {
  const [produto, setProduto] = React.useState('')
  const [carrinho, setCarrinho] = React.useState(1)

  function dobrarCarrinho() {
      setCarrinho(carrinho * 2)
  }

  function adicionarUm() {
      setCarrinho((carrinho => carrinho + 1))
  }

  function limparDados() {
      setProduto(null)
  }

  React.useEffect(() => {
      fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((json) => setProduto(json));
  }, []);

    return (
        <GlobalContext.Provider value={{ carrinho, setCarrinho, produto, setProduto, dobrarCarrinho, adicionarUm, limparDados }}>
        {children}
        </GlobalContext.Provider>
    )
}
