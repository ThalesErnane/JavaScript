console.log("\n Trabalhando com condicionais ");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Parana`
);

const estaAcompanhada = false; // tipo booleano true or false 
const idadeComprador = 19;
let temPassagemComprada = false;
const destino = "Peru";

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true; // true 
let contador = 0;
let destinoExiste = false;

while (contador < listaDeDestinos.length) {  

    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    } 
    contador = contador + 1;
    // contador += 1;
}

console.log("Destino existe: ", destinoExiste); // return true or false 

if(podeComprar && destinoExiste){
    console.log("Boa Viajem");

} else {
    console.log("Desculpe tivemos um erro!");
}


// Ultilizando for 

for(let cont = 0 ; cont < listaDeDesejos.length; cont++){

    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }

}