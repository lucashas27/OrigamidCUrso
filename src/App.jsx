
import './App.css';

const lucas = {
    cliente: 'Lucas',
    idade: 20,
    compras: [
        { nome: 'Chocolate', preco: 'R$ 20'},
        { nome: 'Geladeira', preco: 'R$ 2200'},
        { nome: 'Smartphone', preco: 'R$ 11200'}
    ],
    ativa: true,
};


function App() {
const dados = lucas;
const total = dados.compras.map(item => 
    Number(item.preco.replace("R$ ", '')))
    .reduce((a, b) => a + b);
    
   return (
       <div>
      <p>Situação: <span style={{color: dados.ativa ? 'green' : 'red'}}>{(dados.ativa ? 'Ativa' : 'Inativa')}</span></p>
      <p> Nome: {dados.cliente} </p>
      <p> Idade: {dados.idade}</p>
      <p> Total Gasto: {total} </p> 
      <p> {(total > 10000 && 'Você está gastando muito' )} </p> 
        {/* IF ternário sem o else usa-se o && */}
       </div>
   )
}

export default App;
