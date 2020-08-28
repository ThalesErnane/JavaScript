export class HttpService {

    // ECMAScript 2015, Fetch API
    _handleErrors(res) {
        if(!res.ok)  // se deu um erro 
          throw new Error(res.statusText);
          return res; // se não 
        
    }

    get(url) {
       
        return fetch(url)
            .then(res => this._handleErrors(res))
            .then(res => res.json());
    }


    /*
    get(url) {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4) {
                    if(xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        console.log(xhr.responseText);
                        reject(xhr.responseText);
                    }
                }
            }

            xhr.send();
        });
    }
*/



post(url, dado) { // usando fetch API

    return fetch(url, {
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        body: JSON.stringify(dado) // dado q esta enviando, converte para String 
    })
    .then(res => this._handleErrors(res));
}

/*
    post(url, dado) {


        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4) {

                    if (xhr.status == 200) {

                        resolve(JSON.parse(xhr.responseText));
                    } else {

                        reject(xhr.responseText);
                    }
                }
            };
            xhr.send(JSON.stringify(dado)); // usando JSON.stringifly para converter objeto em uma string no formato JSON.
        });

    } */

}