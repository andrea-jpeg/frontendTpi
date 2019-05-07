const url = 'https://3000-a92570c3-11ba-484d-806e-766171748948.ws-eu0.gitpod.io';
class Fetch{

    static registration(nome, cognome, email, password){
        return(
            new Promise((resolve,reject)=>{
                resolve(fetch(url+'/utenti',{
                    method: 'PUT',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify({
                        'nome': nome,
                        'cognome': cognome,
                        'email': email,
                        'password': password
                        })
                })
                ).then(res => res.json())
            })
        )
    }

    static login(email, password){
        return new Promise((resolve, reject) =>{
            resolve(fetch(url+'/utenti',{
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                    'email': email,
                    'password': password,
                })
            }).then(res => res.json())
            )
        })
    }

    static addPrenotazione(token, dataInizio){
        return new Promise((resolve, reject) =>{
            resolve(
                fetch(url+'/prenotazione',{
                    method: 'POST',
                    headers: new Headers({
                            'Authorization': 'Bearer '+ token,
                            'Content-Type':'application/json'
                    }),
                    body: JSON.stringify({
                        'dataInizio' : dataInizio,
                        'token' : token,
                    })
                }).then(res => res.json())

            )
        })
    }

    static addEvento(token, dataInizio, dataFine, giorniNonDisponibili, intervallo){
        return new Promise((resolve, reject) =>{
            resolve(
                fetch(url+'/evento', {
                    method: 'POST',
                    headers: new Headers({
                            'Authorization': 'Bearer '+ token,
                            'Content-Type':'application/json'
                    }),
                    body: JSON.stringify({
                        'dataInizio': dataInizio,
                        'dataFine' : dataFine,
                        'giorni': giorniNonDisponibili,
                        'lasso' : intervallo,
                    })

                }).then(res => res.json())
            )
        })

    }

    static getEventi(){
        return new Promise((resolve, reject)=>{
            resolve(
                fetch(url+'/evento', {
                    method: 'GET',
                    headers: {'Content-Type':'application/json'},
                }).then(res => res.json())
            )
        })
    }

}export default Fetch