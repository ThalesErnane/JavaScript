import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
   // agencia;
   // _saldo = 0; // private https://github.com/tc39/proposal-class-fields#private-fields
   // _cliente;
    static numeroContas = 0;
    
    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroContas += 1; // atributo estatico da class
    }

    // sobreescrevendo o comportamento de sacar
    sacar(valor){
        let taxa = 1.1; // 10%
        return this._sacar(valor, taxa);
}
    }


    // https://origamid.com/projetos/flexbox-guia-completo/

