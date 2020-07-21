class MensagemView extends View{

    constructor(elemento){
        super(elemento); // chama o constructor de pai
    }


  template(model) {

    return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`;
  }


}