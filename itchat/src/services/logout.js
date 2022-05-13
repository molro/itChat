import { api } from "../config/default"
export default function logOut (user) {
    const method = {
        method:'PUT',
        mode:'cors',
        headers:{ 
        'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({user})
    }
    return fetch(`${api}/auth/login`, method)
    .then(response => response.json())
    .then(respuesta => {
        let sessionData = respuesta.msg;              
        return sessionData
    }).catch(err => {
        console.log(err)
    })
}