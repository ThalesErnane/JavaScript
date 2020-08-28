import {HttpService} from './HttpService';
import {ConnectionFactory} from './ConnectionFactory';
import {NegociacaoDao} from '../dao/NegociacaoDao';
import {Negociacao} from '../models/Negociacao';

export class NegociacaoService {


    constructor(){
      this._http = new HttpService();
    }

    async obterNegociacoes() {

      try {
        const periodos = await Promise.all([
          this.obterNegociacoesDaSemana(),
          this.obterNegociacoesDaSemanaAnterior(),
          this.obterNegociacoesDaSemanaRetrasada()
        ]);
        let negociacoes = periodos
          .reduce((dados, periodo) => dados.concat(periodo), []);
        return negociacoes;
      }
      catch (erro) {
        throw new Error(erro);
      }

  } 


    obterNegociacoesDaSemana() {

      return  this._http
              .get('negociacoes/semana')
              .then(negociacoes => {
                return (negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
              })
              .catch(erro => {
                  console.log(erro);
                  throw new Error('Não foi possível obter as negociações da semana');
              });
}

/*
    obterNegociacoesDaSemana() { 

        return new Promise((resolve, reject) => {
          
        let xhr = new XMLHttpRequest(); // cria uma instância 
        xhr.open('GET', 'negociacoes/semana'); // indica qual endereço e o método 
        configurações 
        xhr.onreadystatechange = () => { // arrow function 


          /*
          0: requisição ainda não iniciada

          1: conexão com o servidor estabelecida

          2: requisição recebida

          3: processando requisição

          4: requisição está concluída e a resposta está pronta 

          if(xhr.readyState == 4 ){

            if(xhr.status == 200){ 

              // passa para o then
              resolve(JSON.parse(xhr.responseText) // para cada objeto do array cria uma negociação 
              .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
              
            } else {
              console.log(xhr.responseText);
              reject(`Não foi possivel obter as negociações da semana`);  // error 
            }  
        }
    };

    xhr.send();

        });

}
*/

obterNegociacoesDaSemanaAnterior() {

  return  this._http
          .get('negociacoes/anterior')
          .then(negociacoes => {
              console.log(negociacoes);
              return (negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

          })
          .catch(erro => {
              console.log(erro);
              throw new Error('Não foi possível obter as negociações da semana anterior');32
    });
 
}


obterNegociacoesDaSemanaRetrasada() {

  return this._http
          .get('negociacoes/retrasada')
          .then(negociacoes => {
              console.log(negociacoes);
              return (negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

          })
          .catch(erro => {
              console.log(erro);
              throw new Error('Não foi possível obter as negociações da semana retrasada');
  });

}

cadastra(negociacao) {
  return ConnectionFactory
     .getConnection()
     .then(conexao => new NegociacaoDao(conexao))
     .then(dao => dao.adiciona(negociacao))
     .then(() => 'Negociação cadastrada com sucesso')
     .catch(erro => {
       console.log(erro)
         throw new Error("Não foi possível adicionar a negociação")
     });
}



lista() {

  return ConnectionFactory
          .getConnection()
          .then(connection => new NegociacaoDao(connection))
          .then(dao => dao.listaTodos())
          .catch(erro => {
              console.log(erro);
              throw new Error('Não foi possível obter as negociações')
            });
}

apaga() {

  return ConnectionFactory
      .getConnection()
      .then(connection => new NegociacaoDao(connection))
      .then(dao => dao.apagaTodos())
      .then(() => 'Negociações apagadas com sucesso')
      .catch(erro => {
            console.log(erro);
            throw new Error('Não foi possível apagar as negociações')
      });
}

importa(listaAtual) {

  return this.obterNegociacoes()
      .then(negociacoes => 
          negociacoes.filter(negociacao => 
              !listaAtual.some(negociacaoExistente => 
                  JSON.stringify(negociacao) == JSON.stringify(negociacaoExistente)))
      )
      .catch(erro => {
          console.log(erro);
          throw new Error('Não foi possível buscar negociações para importar');
      })
  }

}