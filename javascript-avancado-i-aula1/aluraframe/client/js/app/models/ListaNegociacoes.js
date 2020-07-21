class ListaNegociacoes {

    constructor(){
        this._negociacoes = [];
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao); // adiciona negociação a minha lista 
    }

    get negociacoes(){
        // programação defensiva 
        return [].concat(this._negociacoes); // this._negociacoes tras a lista de negociacoes 
    } 
}

/*

Ao passarmos o this._negociacoes dentro do concat(),
o retorno será uma nova lista, um novo array. Agora se tentarmos usar o push() 
do NegociacaoController, só conseguiremos fazer a alteração na cópia da lista, mas não na original.
Se fizermos um teste no formulário e preenchermos os campos uma vez, só deverá ter uma negociação.

*/ 