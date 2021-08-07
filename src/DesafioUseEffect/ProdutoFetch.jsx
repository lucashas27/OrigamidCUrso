import React from 'react'

const ProdutoFetch = ({dados, storage}) => {
    return (
        <div>
            {dados?.nome}
            <p>{dados?.descricao}</p>

            
        </div>
    )
}

export default ProdutoFetch
