export class ProxyFactory {
    

    /*
     O target é o objeto real que é encapsulado pela proxy. É este objeto que não queremos "sujar" com armadilhas ou qualquer código que não diga respeito ao modelo.
    O prop é a propriedade em si, que está sendo lida naquele momento.
    O receiver é a referência ao próprio proxy. É na configuração do handler do Proxy que colocamos armadilhas.
    */ 
    
    
        static create(objeto, props, acao) {
         
            return new Proxy(objeto, {
                    
                    get(target, prop, receiver) {
                        
                        if(props.includes(prop) && ProxyFactory._ehFuncao(target[prop])) {
                            
                            return function() {
                                
                                console.log(`interceptando ${prop}`);
                                let retorno = Reflect.apply(target[prop], target, arguments);
                                acao(target);
                                return retorno;
                            }
                        }
                        
                        return Reflect.get(target, prop, receiver);
                    },
                    
                    set(target, prop, value, receiver) {
                        
                        let retorno = Reflect.set(target, prop, value, receiver);
                        if(props.includes(prop)) acao(target);
                        return retorno;
                    }
            });
        }
        
        static _ehFuncao(func) {
            
            return typeof(func) == typeof(Function);
        }
    }