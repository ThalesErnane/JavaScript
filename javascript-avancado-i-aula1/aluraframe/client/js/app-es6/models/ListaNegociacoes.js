export class ListaNegociacoes {

    constructor(){
        this._negociacoes = [];
      
    }

    inverteOrdem() {
        this._negociacoes.reverse();
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao); // adiciona negociação a minha lista 
        // this._negociacoes = [].concat(this._negociacoes, negociacao);    
        // Reflect.apply(this._armadilha, this._contexto, [this]);
    }

    get negociacoes(){
        // programação defensiva 
        return [].concat(this._negociacoes); // this._negociacoes tras a lista de negociacoes 
    } 

    esvazia(){
        this._negociacoes = []; // recebe um array vazio
        // this._armadilha(this); // se chamar tanto o metodo esvazia ou adiciona ele chama o  this._negociacoesView.update(this._listaNegociacoes);
    }

        // novo método
    get volumeTotal() {
            return this._negociacoes.reduce((total, n) => total + n.volume, 0.0);
    }


        // novo método!
        ordena(criterio) {
            this._negociacoes.sort(criterio);        
        }
}

/*

Ao passarmos o this._negociacoes dentro do concat(),
o retorno será uma nova lista, um novo array. Agora se tentarmos usar o push() 
do NegociacaoController, só conseguiremos fazer a alteração na cópia da lista, mas não na original.
Se fizermos um teste no formulário e preenchermos os campos uma vez, só deverá ter uma negociação.

*/ 