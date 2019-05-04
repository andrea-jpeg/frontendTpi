const url = 'https://3000-e0b7f8f2-9c1d-4292-a47e-f12ee77a8933.ws-eu0.gitpod.io';
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
                    }).then(res => res.json())
                )
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

}export default Fetch