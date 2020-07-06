console.log("Trabalhando com atribuição de variáveis");

const idade = 29;
let nome = "Thales";
const sobrenome = "Ernane";

console.log(nome, sobrenome); // Thales Ernane 
console.log(nome + " " + sobrenome); // Thales Ernane 

console.log(`Meu nome é  ${nome} ${sobrenome}`); 

const nomeCompleto = nome + sobrenome; // sobrescreve 
console.log(nomeCompleto);
nome = 2; // Fracamente tipada 
console.log(nome);

