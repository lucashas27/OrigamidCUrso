import React from 'react'
import { Link } from 'react-router-dom'

const ListaProdutos = () => {
  const [listaProdutos, setListaProdutos] = React.useState(null)

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto`)
    .then((response) => response.json())
    .then((json) => setListaProdutos(json))
  }, [])

  if (listaProdutos === null) return null;
  return (
    <div>
      {listaProdutos.map((produto) => <li key={produto.id}> <Link to={'/produtos/'+ produto.id}><img src={produto.fotos[0].src} alt={produto.nome}/></Link> </li>)}
    </div>
  )
}

export default ListaProdutos
