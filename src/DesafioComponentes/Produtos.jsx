import React from 'react'

const Produtos = ({tema}) => {

    const produtos = [
        { nome: 'notebook', propriedades: ['16gb ram, 512gb'] },
        { nome: 'smartphone', propriedades: ['4gb ram, 128gb'] }
      ]

    return (
        <div>
          <h1> {produtos.map((produto) => (<li key={produto.nome}>{produto.nome + ' com ' + produto.propriedades }</li> ))} </h1>
          {/* <h1> {produtos.map((produto) => (<li key={produto.nome}>{produto.propriedades}</li> ))} </h1> */}
          {tema}
        </div>
    )
}

export default Produtos
