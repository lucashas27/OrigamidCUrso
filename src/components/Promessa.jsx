import React from 'react';
import Produto from '../components/Produto.jsx';
import '../Promessa.css'

const Promessa = () => {
  const [dados, setDados] = React.useState(null);
  const [fotoDados, setFotoDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/arceus`
    );
    const json = await response.json();
    setFotoDados(json.sprites.front_default)
    setDados(json);
    setCarregando(false);
  }

  return (
    <>    
    <div className="interno">
      <button onClick={handleClick}>Quem é esse Pokemon?</button>
      <form action="/">
        <input type="textarea" />
        <button type="submit">Salvar</button>
      </form>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <p>Nome: <Produto dados={dados.name} /></p>}
      {!carregando && dados && <img src={fotoDados} alt="Foto do pokemon" />}
      {!carregando && dados && <p>Tipo:<Produto dados={dados.types[0].type.name}/></p>}
      </div>
    </>      
  );
};

export default Promessa;