import React from 'react'
import { GlobalContext } from './StorageGlobal'

const Produto = () => {

    const global = React.useContext(GlobalContext)
    console.log(global)


    function handleClickDobrar() {
        global.dobrarCarrinho()
    }

    function handleClickAddOne() {
        global.adicionarUm()
    }

    return (
        <div>
            <p> Produto: {global.produto && global.produto[1].nome}</p>
            <p> Preço: {global.produto && global.produto[1].preco}</p>
            <button onClick={global.limparDados}>Limpar Dados</button>
            <button onClick={handleClickAddOne}>Adicionar Um</button>
            <button onClick={handleClickDobrar}>Dobrar</button>
            <p>Qtde Carrinho:{global.carrinho}</p>
        </div>
    )
}

export default Produto
