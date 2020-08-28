
// usando Module Pattern
// var ConnectionFactory = (function () { // função anonima 

const stores = ['negociacoes'];
const version = 4;
const dbName = 'aluraframe';

let connection = null;

let close = null;

export class ConnectionFactory {

    constructor(){

        throw new Error('Não é possivel criar instâncias de ConnectionFactory');
    }

    static getConnection (){

        return new Promise((resolve, reject) => {

            let openRequest = window.indexedDB.open(dbName, version);

            openRequest.onupgradeneeded = e => {
                ConnectionFactory._createStores(e.target.result);

            };

            openRequest.onsuccess = e => {

                if(!connection){
                    // Monkey Patch 
                    connection = e.target.result; // verifica se é nulo, se sim recebe a conexão  
                    close = connection.close.bind(connection); // vai receber a função close, copia já associado com connection     
                    connection.close = function(){
                        throw new Error('Você não pode fechar diretamente a conexão'); 
                    }
                
                } 
                resolve(connection);
            };

            openRequest.onerror = e => {

                console.log(e.target.error)
                
                reject(e.target.error.name);
            };

        });
    }

    static _createStores(connection){
        stores.forEach(store => {
            // apaga cada objectStore se ela exist  
         if(connection.objectStoreNames.contains(store)) connection.deleteObjectStore(store);

         connection.createObjectStore(store, { autoIncrement: true }); // cria a store
     });

    }

    static closeConnection() {

        if(connection){
            close();
            connection = null;
        }
    }

   }
// })();

