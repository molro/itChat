import React, {useState} from 'react';
import { Link, Navigate } from 'react-router-dom';
import login from '../services/login';
import { socket } from '../context/SocketContext';
import EVENTS from '../config/events';
import Login_Style from '../styles/Login_Style.css'

export default function Login() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [respuesta, setResp] = useState('');
    const [token, setToken] = useState();
    


    const handleLogin = (e) => {
        e.preventDefault();
        login(username, password)
        .then(sessionData => {

            window.localStorage.setItem('nickname', sessionData.nickname)
            window.localStorage.setItem('jwt', sessionData.token)
            let jwt =  window.localStorage.getItem('jwt', sessionData.token)
            setToken(jwt)
            setResp(sessionData.msg)
            
            socket.emit(EVENTS.CLIENT.CONNECTED, sessionData.nickname);
          
            window.location.reload()
        

          })
          .catch(sessionData => {
            window.localStorage.removeItem('jwt')
         
          })
    }
    if(token) {
      return <Navigate to='/'/>
    }
  return(
    <>
      <form onSubmit={handleLogin} class>
        <label>{respuesta}</label>
        <label>
          {/* <p className="login__title">Email</p> */}
          <input type="text" className="login__input" placeholder="Email" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          {/* <p className="login__title">Password</p> */}
          <input type="password" className="login__input" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div className='login__buttons'>
          <button className="login__button" type="submit">Enter</button>
          <button className="login__button" type="submit"><Link to="/register">Registrate aquí!</Link></button>
        </div>
      </form>
    </>
  )
}