export class DateHelper {


    constructor(){

        throw new Error('DateHelper não pode ser instânciada');
    }

   static textoParaData(texto){
           // /^\d{4}-\d{2}-\d{2}$/
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)){ // 
            throw new Error('Deve estar no formato aaaa-mm-dd');
        }

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

   static dataParaTexto(data){
      
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;  // Template Strings
        // data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear(); 
           
    }
}