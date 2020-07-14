import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
   // _saldo;
   //  _cliente;
   // agencia;  
    
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);
    }

    sacar(valor){
        const taxa = 1.02; // 2%
        return this._sacar(valor, taxa); 
    }

}