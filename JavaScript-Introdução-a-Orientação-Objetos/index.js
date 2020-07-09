import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Thales",12345678914);
console.log(cliente1.cpf);
console.log(cliente1);

const conta1 = new ContaCorrente(cliente1, 1001);


const cliente2 = new Cliente("Alice", 15978945684);
const conta2 = new ContaCorrente(cliente2, 102);

console.log(conta1);
// console.log(conta2.cliente);
// console.log(conta2.saldo);
// console.log(cliente2);

conta2.depositar(900);
// console.log(conta2.saldo);
const valorTransferido = 300;
conta2.transferir(valorTransferido, conta1);



conta1.depositar(500);
const valorSacado = conta1.sacar(100);
// console.log(conta1.saldo);
// console.log(valorSacado);
// console.log(cliente1);
// console.log(conta1);

console.log(ContaCorrente.numeroContas);






