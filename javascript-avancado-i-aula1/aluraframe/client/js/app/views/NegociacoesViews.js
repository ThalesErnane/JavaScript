class NegociacoesView extends View {

    constructor(elemento){
        super(elemento); // chama o constructor de pai
    }

        template(model) {

            return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.negociacoes.map(n => `
                
                        <tr>
                            <td>${DateHelper.dataParaTexto(n.data)}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>
                
                    `).join('')}
                </tbody>

                <tfoot>
                    <td colspan="3"></td>
                    <td>
                        ${ model.negociacoes.reduce((total, n) => total + n.volume, 0.0)} 
                    </td>
            <tfoot>
         </table>
                `;
        }


}

/*
Codigo Verboso 

                <tbody>
                        ${model.negociacoes.map(n => {
                    
                        return `
                            <tr>
                                <td>${DateHelper.dataParaTexto(n.data)}</td>
                                <td>${n.quantidade}</td>
                                <td>${n.valor}</td>
                                <td>${n.volume}</td>
                            </tr>
                        `
                  }).join('')}
            </tbody>

*/ 

/*

                <tfoot>
                    <td colspan="3"></td>
                    <td>${
                        (function() {
                
                            let total = 0;
                            model.negociacoes.forEach(n => total+= n.volume);
                            return total;
                    })() // invocando a função 
                    }
                    </td>
                </tfoot>

                <tfoot>
                    <td colspan="3"></td>
                    <td> faz a iteração na lista 
                        ${model.negociacoes.reduce(function(total, n) {
                            return total + n.volume;
                        }, 0.0) segundo parametro é a inicialização do var total 0.0
                        }
                    </td>
                </tfoot>

*/