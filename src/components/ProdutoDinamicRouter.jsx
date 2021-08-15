import React from 'react'
import { useParams } from 'react-router-dom'
import LoadingSvg from './images/Spinner-1s-200px.svg'

const ProdutoDinamicRouter = () => {
  const params = useParams()
  const [produto, setProduto] = React.useState(null)
  const [notCarregando, setNotCarregando] = React.useState(null)
  
  console.log(params)

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.nome}`)
    .then((response) => response.json())
    .then((json) => setProduto(json))
    .then(setNotCarregando(true));
}, [params]);
  
  console.log(notCarregando)
  if (produto === null) return null
  return (
    <div>
    {!notCarregando && <img src={LoadingSvg} alt="Loading....."></img>}
      {notCarregando &&  <p> {produto.nome} </p> }
      {notCarregando &&  <p>Preço: {produto.preco} </p>}
      {notCarregando &&  <p>Descrição: {produto.descricao}</p>}
      {notCarregando &&  <p>Está vendido? {produto.vendido === 'true' ? 'Sim' : 'Nao'}</p>}
      {notCarregando &&  <p><img src={produto.fotos[0]?.src} alt={produto.fotos[0]?.titulo}/> </p>}
    </div>
  )
}

export default ProdutoDinamicRouter
