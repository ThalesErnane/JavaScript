
// Selecionar todos os campos da DOM e incluir num array 
var campos = [ 
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor'),  
];

console.log(campos);

var tBody = document.querySelector('table tbody');

// Seleciona os elementos do form, e adicionar um evento ao clicar no botão submit
document.querySelector('.form').addEventListener('submit', function(event){

    event.preventDefault(); // não recarrega a pag
    var tr = document.createElement('tr'); // cria uma tr 
    
    campos.forEach(function(campo){
        var td = document.createElement('td'); // para cada elemento do form ao iterar cria um td com os valores informados 
        td.textContent = campo.value; // passa o valor informado para uma var
        tr.appendChild(td); // cria a td 

    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value; // Recebe o valor do campo 2 e 3 e multiplica
    tr.appendChild(tdVolume); 

   
    tBody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();

});