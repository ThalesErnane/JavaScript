import {ListaNegociacoes} from '../models/ListaNegociacoes';
import {Mensagem} from '../models/Mensagem';
import {NegociacoesView} from '../views/NegociacoesView';
import {MensagemView} from '../views/MensagemView';
import {NegociacaoService} from '../services/NegociacaoService';
import {DateHelper} from '../helpers/DateHelper';
import {Bind} from '../helpers/Bind';
import {Negociacao} from '../models/Negociacao';




class NegociacaoController {

      constructor() {
        
            let $ = document.querySelector.bind(document); // mantem a associação ao document
            this._inputData = $('#data');
            this._inputQuantidade = $('#quantidade');
            this._inputValor = $('#valor');
            
/*
 O target é o objeto real que é encapsulado pela proxy. É este objeto que não queremos "sujar" com armadilhas ou qualquer código que não diga respeito ao modelo.
O prop é a propriedade em si, que está sendo lida naquele momento.
O receiver é a referência ao próprio proxy. É na configuração do handler do Proxy que colocamos armadilhas.
*/ 

           // this._negociacoesView = new NegociacoesView($('#negociacoesView'));

            this._listaNegociacoes = new Bind(new ListaNegociacoes(), 
            new NegociacoesView($('#negociacoesView')),
             `adiciona`, `esvazia`, 'ordena', 'inverteOrdem');
            
            /*
            this._listaNegociacoes = new ListaNegociacoes(model => 
            this._negociacoesView.update(model));

            */
            /*Então, o this de uma arrow function é léxico, 
              enquanto o this de uma função padrão é dinâmico. Com esse ajuste,
              conseguimos deixar o nosso código mais sucinto.
            */ 

          
           // this._mensagemView = new MensagemView($('#mensagemView'));
           this._mensagem = new Bind(new Mensagem(), new MensagemView($('#mensagemView')), `texto`);

           this._ordemAtual = ''; // quando a página for carregada, não tem critério. Só passa a ter quando ele começa a clicar nas colunas
           this._service = new NegociacaoService();
           
           this._init();   
        }


        _init() {

          this._service 
              .lista()
              .then(negociacoes =>
                  negociacoes.forEach(negociacao =>
                      this._listaNegociacoes.adiciona(negociacao)))
              .catch(erro => this._mensagem.texto = erro);
      
      
              setInterval(() => {
                  this.importaNegociacoes();
              }, 3000);
      }
          
          /* codigo a cima esta resumido 
          ConnectionFactory.getConnection().then(connection => {

             new NegociacaoDao(connection)
                 .listaTodos()
                 .then(negociacoes => {

                     negociacoes.forEach(negociacao => { // para cada negociação faça

                         this._listaNegociacoes.adiciona(negociacao); // adiciona na lista cada negociação 
                     });

                 }) 

          }); */

        

        adiciona(event) {

          event.preventDefault();
  
          let negociacao = this._criaNegociacao();
  
          this._service 
              .cadastra(negociacao)
              .then(mensagem => {
                  this._listaNegociacoes.adiciona(negociacao);
                  this._mensagem.texto = mensagem; 
                  this._limpaFormulario();  
              }).catch(erro => this._mensagem.texto = erro);
      }
        
/*

    adiciona(event) {

      event.preventDefault();

      ConnectionFactory
      .getConnection()
      .then(connection => {

        let negociacao = this._criaNegociacao();

        new NegociacaoDao(connection)
        .adiciona(negociacao)
        .then(() => { 

          this._listaNegociacoes.adiciona(negociacao);
          this._mensagem.texto = 'Negociação adicionada com sucesso';
          this._limpaFormulario();
        
        });

      })
      .catch(erro => this._mensagem.texto = erro);

    } */

         //  let helper = new DateHelper();  

          // let data = helper.textoParaData(this._inputData.value);   
          
         // console.log(data);
      
      //  this._listaNegociacoes.adiciona(this._criaNegociacao()); // cria e adiciona na lista a negociacao        
       // this._mensagem.texto = 'Negociação adicionada com sucesso';      
       // this._limpaFormulario(); // limpa o form 

       // console.log(this._listaNegociacoes.negociacoes);
          // console.log(negociacao);
          // console.log(DateHelper.dataParaTexto(negociacao.data));
  
/*

      importaNegociacoes(){

// Usando Promise - assincrona 
        let service = new NegociacaoService();
    
        Promise.all([ // 3 arrays 
            service.obterNegociacoesDaSemana(), // array
            service.obterNegociacoesDaSemanaAnterior(), // array
            service.obterNegociacoesDaSemanaRetrasada()] // array
        ).then(negociacoes => {
            negociacoes // reduce cria um array q um elemento com todas as neg, concat(), que concatenará o array da primeira posição de negociacoes
              .reduce((arrayAchatado, array) => arrayAchatado.concat(array), []) // junta os 3 array em um so 
              .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações importadas com sucesso';
        })
        .catch(erro => this._mensagem.texto = erro);  


        /*
        service.obterNegociacoesDaSemana() // chama o método direto 
            .then(negociacoes => {
                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
                this._mensagem.texto = 'Negociação da semana obtida com sucesso';
            })
            .catch(erro => this._mensagem.texto = erro);


        service.obterNegociacoesDaSemanaAnterior()
            .then(negociacoes => {
              negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
              this._mensagem.texto = 'Negociações da semana obtidas com sucesso';
          })
            .catch(erro => this._mensagem.texto = erro);
      
          service.obterNegociacoesDaSemanaRetrasada()
            .then(negociacoes => {
              negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
              this._mensagem.texto = 'Negociações da semana obtidas com sucesso';
          })
            .catch(erro => this._mensagem.texto = erro);
      *


      }
*/

        ordena(coluna) {
          if(this._ordemAtual == coluna) {
            this._listaNegociacoes.inverteOrdem();
        } else {
            this._listaNegociacoes.ordena((a, b) => a[coluna] - b[coluna]);    
        }
        this._ordemAtual = coluna;
    }
        

    importaNegociacoes() {

      this._service
          .importa(this._listaNegociacoes.negociacoes) // lista atual
          .then(negociacoes => negociacoes.forEach(negociacao => {
              this._listaNegociacoes.adiciona(negociacao);
              this._mensagem.texto = 'Negociações do período importadas'
            }))
          .catch(erro => this._mensagem.texto = erro);
  }

/*
      importaNegociacoes(){ // antes de usar Promise

        let service = new NegociacaoService();

        service.obterNegociacoesDaSemana((erro, negociacoes) => { // 

          if(erro){ // Error-first Callback
              this._mensagem.texto = err;
              return; // mostra o erro 
            }
            // cria uma array e itera adicionando na lista uma negociação  
            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
 

            service.obterNegociacoesDaSemanaAnterior((erro, negociacoes) => { // 

          if(erro){ // Error-first Callback
              this._mensagem.texto = err;
              return; // mostra o erro 
            }
            // cria uma array e itera adicionando na lista uma negociação  
            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));

            service.obterNegociacoesDaSemanaRetrasada((erro, negociacoes) => { // 

          if(erro){ // Error-first Callback
                  this._mensagem.texto = err;
                  return; // mostra o erro 
                }
                // cria uma array e itera adicionando na lista uma negociação  
            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            // para cada item da lista de negociações adiciona uma negociação na lista 
            this._mensagem.texto = 'Negociações importadas com sucesso'; 
        
            });
    
        });

      });
        
      }

      */

     apaga() {

      this._service
          .apaga()
          .then(mensagem => {
            this._mensagem.texto = mensagem;
            this._listaNegociacoes.esvazia();
          })
          .catch(erro => this._mensagem.texto = erro);

      }

      _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value ));
      }

      _limpaFormulario(){
          this._inputData.value = '';
          this._inputQuantidade.value = 1;
          this._inputValor.value = 0.0;

          this._inputData.focus();
      }

    
}

let negociacaoController = new NegociacaoController();

export function currentInstance() {

    return negociacaoController;

}

       // inputValor.value tem acesso ao valor digitado no input
         /*
          console.log(this._inputData.value); 
          console.log(this._inputQuantidade.value);
          console.log(this._inputValor.value);
         */

         /* 

          // console.log(typeof(this._inputData.value));  
          // 2016-11-12  
          // let data1 = new Date(this._inputData.value.split('-'));  
          // let dataExpressaoRegular = new Date(this._inputData.value.replace(/-/g, ','));  



          let dataString = '17-05-2016';

          let data = new Date(dataString.split('-').reverse().join('/'));
          console.log(data);
          
          let dataString = '17-05-2016';

          dataString = dataString.split('-').reverse().join('/');

          let data = new Date(dataString);

          console.log(data);


          let lista1 = ['banana', 'laranja', 'mamão'];
let lista2 = ['caju', 'tangerina', 'abacaxi'];

lista1.push(...lista2);

console.log(lista1);
//["banana", "laranja", "mamão", "caju", "tangerina", "abacaxi"]
          
          */


                          /*
            this._listaNegociacoes = new ListaNegociacoes(this, function(model){ // passa a instância de lista de negociações

                this._negociacoesView.update(model); // seja negociacao controller 

            });*/
