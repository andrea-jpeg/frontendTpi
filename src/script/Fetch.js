const url = 'https://3000-b48d5888-a933-45ba-8f50-e09bd820169c.ws-eu0.gitpod.io';
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

}export default Fetch