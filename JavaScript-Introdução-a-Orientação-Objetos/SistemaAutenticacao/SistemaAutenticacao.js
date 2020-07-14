

export class SistemaAutenticacao {
     static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha); // retorna true or false
        } 
            return false;
     }

     static ehAutenticavel(autenticavel){
         return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function; // verifica se na class possue 
     }

}