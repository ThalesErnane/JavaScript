console.log("Trabalhando com listas");


// ctr + k + c ou ctr + k + u

const salvador = 'Salvador';
const rioDeJaneiro = 'Rio de Janeiro';
const saoPaulo = 'São Paulo';

console.log("Destinos Possíveis");
console.log(salvador, saoPaulo, rioDeJaneiro);

// Estrutura de Dados - Arrays 

const listaDeDestinos = new Array(
    'Salvador', 'Rio de Janeiro', 'São Paulo', 'Curitiba'
);

//  Adicionando itens no array 

listaDeDestinos.push('Pernambuco');

console.log(listaDeDestinos);

// removendo itens da lista 

listaDeDestinos.splice(1, 1);

console.log(listaDeDestinos);

// Mostrando somente um item

console.log(listaDeDestinos[0], listaDeDestinos[1]);

/*
                                             Array Exemplos 

*/

// Criando um array 
var frutas = ['Maçã', 'Banana'];

console.log(frutas.length);
// 2

// Acessar um item (index) do Array 

var primeiro = frutas[0];
// Maçã

var ultimo = frutas[frutas.length - 1];
// Banana

// iterar um Array 
frutas.forEach(function (item, indice, array) {
    console.log(item, indice);
  
});
// Maçã 0
// Banana 1 

// Adicionar um item ao final do Array 
var adicionar = frutas.push('Laranja');
// ['Maçã', 'Banana', 'Laranja']

// Remover um item ao final do Array 
var ultimo = frutas.pop(); // remove Laranja (do final)
// ['Maçã', 'Banana'];

// Remover do inicio do Array 
var primeiro = frutas.shift(); // remove Maçã do início
// ['Banana'];

// Adicionar ao inicio do Array 
var adicionar = frutas.unshift('Morango') // adiciona ao início
// ['Morango', 'Banana'];

// Procurar o índice de um item na Array 
frutas.push('Manga');
// ['Morango', 'Banana', 'Manga']

var pos = frutas.indexOf('Banana');
// 1

// Remover um item pela posição do índice 
var removedItem = frutas.splice(pos, 1); // é assim que se remove um item
// ['Morango', 'Manga']

// Remover itens de uma posição de índice 
var vegetais = ['Repolho', 'Nabo', 'Rabanete', 'Cenoura'];
console.log(vegetais); 
// ['Repolho', 'Nabo', 'Rabanete', 'Cenoura']

var pos = 1, n = 2;

var itensRemovidos = vegetais.splice(pos, n); 
// Isso é como se faz para remover itens, n define o número de itens a se remover,
// a partir da posição (pos) em direção ao fim da array.

console.log(vegetais); 
// ['Repolho', 'Cenoura'] (o array original é alterado)

console.log(itensRemovidos); 
// ['Nabo', 'Rabanete

// Copiar um Array 
var copiar = frutas.slice(); // é assim que se copia
// ['Morango', 'Manga']