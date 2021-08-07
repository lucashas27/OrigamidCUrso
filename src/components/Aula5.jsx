const produtos = [
   { id: 1,
    nome: 'smartphone',
    preco: 'R$ 2220200',
    cores: ['#29d8d5, #25a34, #fc3766']
   },

   {
    id: 2,
    nome: 'geladeira',
    preco: 'R$ 2300',
    cores: ['#298d5, #d439b, #f37ac59']
   },

   {
    id: 3,
    nome: 'microondas',
    preco: 'R$ 15200',
    cores: ['#28d5, #d4a39b, #f7ac59']
   },
]

const Aula5 = () => {
const dados = produtos.filter(({preco}) => Number(preco.replace('R$ ', '')) > 1500)

return (
    <h1>{(dados[0].preco < 1500 ? 'Muito caro' : 'Barato')} </h1>
)
}


export default Aula5;