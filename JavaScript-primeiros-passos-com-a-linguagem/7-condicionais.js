console.log("Trabalhando com condicionais");

const listaDeDesejos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Parana`
);

const estaAcompanhada = false; // tipo booleano true or false 
const idadeComprador = 19;
const temPassagemComprada = true;

console.log("Destinos possíveis:");

console.log(listaDeDesejos);


/* 
if (idadeComprador >= 18) {

    console.log("Comprador maior de idade");
    listaDeDesejos.slice(1, 1); // removendo item

} else if (estaAcompanhada == true) { // esta acompanhada

    console.log("Comprador esta acompanhado");
    listaDeDesejos.slice(1, 1); // removendo item 

} else {
    console.log("Comprador não é maior de idade e não posso vender");
}
 */


 if (idadeComprador >= 18 || estaAcompanhada == true ){
    
    console.log("Boa viajem ");
    listaDeDesejos.slice(1, 1); // removendo item

 } else {
    console.log("Comprador não é maior de idade e não posso vender");
 }


console.log("Embarque: \n\n");
if (idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viajem");
} else {
    console.log("Você não pode embarcar");
}

// Operadores lógicos 
// retorna true or false
console.log(idadeComprador > 18); // maior que
console.log(idadeComprador < 18); // menor que 
console.log(idadeComprador >= 18); // maior ou igual que
console.log(idadeComprador <= 18); // menor ou igual que 
console.log(idadeComprador == 18); // igual  
