import {currentInstance} from './controllers/NegociacaoController';
import {} from './polyfill/fetch'; // somente é carregado 

let negociacaoController =  currentInstance();

document.querySelector('.form').onsubmit = negociacaoController.adiciona.bind(negociacaoController);
document.querySelector('[type=button]').onclick = negociacaoController.apaga.bind(negociacaoController);

/*
    O porquê do uso do bind já foi visto anteriormente. Se não o incluíssemos,
     o this do adiciona não seria mais o negociacaoController. 
*/ 