import React from 'react'

const Produto = ({dados}) => {
    return (
        <div>
            <h1>Produto:</h1>
           <p>{dados.nome}</p>
           <p>{dados.descricao}</p>
            <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} style={{width: '70px'}} />
        </div>
    )
}

export default Produto
