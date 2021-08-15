import React from 'react'
import { useParams } from 'react-router-dom'

const ProdutoPage = () => {
  const [produto, setProduto] = React.useState(null)
  const params = useParams()
  
  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.nome}`)
    .then((response) => response.json())
    .then((json) => setProduto(json))
  }, [params.nome])

  if (produto === null) return null 
  return (
    <div>
     <p>{produto.nome}</p>
     <p><img src={produto.fotos[0].src} alt=""/></p>
     <p>R${produto.preco}</p>
     <p>{produto.descricao}</p>
    </div>
  )
}

export default ProdutoPage
