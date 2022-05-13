import { chat } from "../config/default"

export default function getUser (token) {
    const method = {
        method:'GET',
        mode:'cors',
        headers:{ 
        'Content-Type': 'application/json;charset=utf-8',
        'auth-token':token,
        }
    }
    return fetch(`${chat}/users`, method)
    .then(response => response.json())
    .then(respuesta => { console.log(respuesta)
    }).catch(err => console.log(err))
}