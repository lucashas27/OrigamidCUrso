import React from 'react'
import { useParams } from 'react-router-dom'
const ProdutoDinamicRouter = (nome) => {
  const params = useParams()
  const [produto, setProduto] = React.useState('')

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.nome}`)
    .then((response) => response.json())
    .then((json) => setProduto(json));
}, [params]);
  
  console.log(params)
  return (
    <div>
      {produto && produto.nome}
    </div>
  )
}

export default ProdutoDinamicRouter
