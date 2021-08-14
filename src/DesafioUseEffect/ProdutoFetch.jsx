import React from 'react'

const ProdutoFetch = ({dados, storage}) => {
    return (
        <div>
            {dados && dados?.nome}
            <p>{dados && dados?.descricao}</p>

            
        </div>
    )
}

export default ProdutoFetch
