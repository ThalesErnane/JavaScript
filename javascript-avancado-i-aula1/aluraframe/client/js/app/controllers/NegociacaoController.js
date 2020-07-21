class NegociacaoController {

      constructor() {
        
            let $ = document.querySelector.bind(document); // mantem a associação ao document
            this._inputData = $('#data');
            this._inputQuantidade = $('#quantidade');
            this._inputValor = $('#valor');
            this._listaNegociacoes = new ListaNegociacoes();
            this._negociacoesView = new NegociacoesView($('#negociacoesView'));

            this._negociacoesView.update(this._listaNegociacoes);

            this._mensagem = new Mensagem();
            this._mensagemView = new MensagemView($('#mensagemView'));

            this._mensagemView.update(this._mensagem);
        }
        
    adiciona(event) {

          event.preventDefault();

         //  let helper = new DateHelper();  

          // let data = helper.textoParaData(this._inputData.value);   
          
         // console.log(data);
        
        this._listaNegociacoes.adiciona(this._criaNegociacao()); // cria e adiciona na lista a negociacao
        this._negociacoesView.update(this._listaNegociacoes); // atualiza a lista na View
        
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagemView.update(this._mensagem);
      
        this._limpaFormulario(); // limpa o form 

        console.log(this._listaNegociacoes.negociacoes);
          // console.log(negociacao);
          // console.log(DateHelper.dataParaTexto(negociacao.data));
      }

      _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value );
      }

      _limpaFormulario(){
          this._inputData.value = '';
          this._inputQuantidade.value = 1;
          this._inputValor.value = 0.0;

          this._inputData.focus();
      }


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