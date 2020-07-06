console.log("\n Trabalhando com condicionais ");

const listaDeDesejos = new Array(
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

while (contador < listaDeDesejos.length) {  

    if (listaDeDesejos[contador] == destino) {
        destinoExiste = true;
        break;
    } 
    contador = contador + 1;
    // contador += 1;
}

console.log("Destino existe: ", destinoExiste); // return true or false 