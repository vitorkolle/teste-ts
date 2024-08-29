/*Tipos Primitivos de Dados*/

//string
let nome:string = 'Kolle'

//number
let idade:number = 18

//boolean
let vivo: boolean = true

//undefined
let ativo: undefined = undefined

//null
let nada: null = null


/*Tipos Avançados de Dados*/

//union type - quando o valor pode ser mais do que de um único tipo
let variavelA: string | number
variavelA = 'olá'
variavelA = 23

//any - pode ser qualquer tipo existente (desativa a verificação de tipo, podendo ser uma forma de evitar erros, mas não mantém a segurança do TS)
let qualquer: any = 100
qualquer = 'oi'
qualquer = true
qualquer = undefined
qualquer = null

//unknown - parecido com o any, mas é mais seguro por exigir verificações ou conversões explícitas, garantindo a segurança da tipagem durante as operações
let valor:unknown = 100
valor = 'Texto'

//console.log(valor.length) //erro

//conversão explícita da variável
let valorConvertido = valor as string
console.log(valorConvertido.length) //5


//never - lança um erro quando é atribuido um tipo de dado
//let b:never = true //erro

//array - sintaxe muito específica
// const 'nome da variável':'tipo de dado[]' = []
const nomes: string[] = []
nomes.push('Vitor') //sem erro
//nomes.push(2) //erro


/*Palavra 'readonly' impede que matrizes sejam alteradas*/
const numeros: readonly number[] = [1,2,3,4]
//numeros.push(5) //erro

//O TS pode identificar o tipo de uma matriz se ela for alimentada (não faz sentido usar)
const numbers = [1,2,3,4]
numbers.push(2)
//numbers.push('olá') //erro
let x:number = numbers[2] // x = 2

//Uso de tupla - tupla permite que cada índice do array guarde informações com tipos de dados diferentes
let testeTupla: [number, string, string, boolean]
testeTupla = [1, 'oi', 'olá', false]

//Uma boa prática para o uso de tupla, é usá-la com o readonly, para que o controle da quantidade de itens não seja perdido
let ourTuple: readonly [number, boolean, boolean]
ourTuple = [2, true, false]
//ourTuple.push('olá') //erro

//Objetos - JSON
const carro: {marca: string, modelo:string, ano:number} = {
    marca: 'fiat',
    modelo: 'punto',
    ano: 2021
    //marca: true //erro
}

//O TS pode inferir através do dado passado
const car = {
    marca: 'Ferrari'
}

//car.marca = 2 //erro
car.marca = 'GM'

//O TS pode ter propriedades adicionais, são essas as que não precisam ser definidas quando o objeto é definido, podendo ser definidas depois ou não
const carro2: {modelo:string, ano?:number} = {
    modelo: 'Urus'
}
carro2.ano = 2023

//Assinatura de índice - Como se fosse o id da variável
const nomeIdade: {[index: string]: number} = {}
nomeIdade['kolle'] = 7
//nomeIdade['kolle'] = 'sete' //erro


//ALIASES - 'apelidos' pros tipos de dados
type AnoVeiculo = number
type MarcaVeiculo = string
type IsProduzindo = boolean
type Carro = {
    ano: AnoVeiculo
    marca: MarcaVeiculo
    produzindo: IsProduzindo
}

//Exemplo de uso
const uno: AnoVeiculo = 1990
const gol: MarcaVeiculo = "Wolksvagen"
const vectrA: IsProduzindo = true
const Astra: Carro = {
    ano: 2002,
    marca: 'Gm',
    produzindo: false
}

//Interfaces
interface Retangulo {
    altura: number
    largura: number
}

//Exemplo de uso
const novoItem: Retangulo = {
    altura: 2,
    largura: 3,
    //diagonal: 5 //erro
}

//Interfaces podem ser extendidas
interface RetanguloColorido extends Retangulo{
    cor: string
}


//uso
const novoRetangulo: RetanguloColorido = {
    altura: 6,
    largura: 10,
    cor: 'vermelho'
}

/*
Funções
TS tem uma sintaze específica para digitar parâmetros de função e valores de retorno
*/

//Definindo o tipo de retorno da função
function getTime(): number{
    return new Date().getTime()
}

//Void - Quando a função não tem retorno
function printHello(): void{
    console.log('Hello')
}

//Tipos em parâmetros de função
function multiplicacao(a: number, b:number):number{
    return a*b
}
multiplicacao(5, 10)

//É possível usar o operador para que o parâmetro seja opcional '?'
function add(a: number, b:number, c?:number):number{
    return a + b + (c || 0)
}
add(5, 2)

//Parâmetros com valor padrão
function saudacao(name: string = 'Kolle'): void{
    console.log(`Olá, ${nome}!`)
}
saudacao('Vitor')

//Parâmetros nomeados
function hello({nome, idade}: {nome: string, idade: number}):void{
    console.log(`Hello, ${nome}! Você tem ${idade} anos.`)
}
hello({nome:'Kolle', idade: 17})


//Generics - é como se fosse um coringa que pode levar vários tipos de dados
function imprimirValor<T>(valor: T):void{
    console.log(valor)
}
imprimirValor<number>(32)
imprimirValor<string>('Olá')
imprimirValor<boolean>(true)