import React from 'react'

const UseState = () => {
    const [ativo, setAtivo] = React.useState(true)

    return (
        <div>
            <button onClick={() => setAtivo(!ativo)}>{ativo ? 'Ativo' : 'Inativo' }</button>
        </div>
    )
}

export default UseState
