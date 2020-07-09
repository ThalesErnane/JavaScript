import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    _saldo = 0; // private https://github.com/tc39/proposal-class-fields#private-fields
    _cliente;
   static numeroContas = 0;


    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroContas += 1; // atributo estatico da class
    }

    get saldo(){
        return this._saldo;
    }
  
    set cliente(novoValor){
        if(novoValor instanceof Cliente){   
            this._cliente = novoValor;
        }
     
    }

    get cliente(){
        return this._cliente;
    }


    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor; 

            return  valor; // return
        }
    }

    depositar(valor){
        if(valor <= 0){
            return; // return e early return
        }
        this._saldo += valor; 
    }

    transferir(valor, conta){
        if(valor <= this._saldo){
            const valorSacado = this.sacar(valor); // saca da sua conta o valor solicitado 
            conta.depositar(valorSacado);
        }

    }

}