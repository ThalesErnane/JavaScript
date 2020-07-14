
// Classe abstrata 
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){  
            throw new Error("Você não deveria instânciar um objeto do tipo Conta Diretamente, pois é uma classe abstrata");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this.agencia = agencia;
      
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
    
    // Metodo abstrato 
    sacar(valor){
        throw new Error("O método Sacar da conta é abstrato");
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado; 

            return  valorSacado; // return
        }

            return 0; // saldo insuficiente
    }

    depositar(valor){
        if(valor <= 100){
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