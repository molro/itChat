
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import register from '../services/register';

export default function Register() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [nickname, setNickname] = useState();
    const [registerStatus, setRegStatus] = useState({});
    const [regLogg, setRegLogg] = useState(false);
    const handleRegister = (e) => {
        e.preventDefault();
        register(nickname, email, password)
        .then(response => {
          setRegStatus(response)
          setRegLogg(true);
        })
          .catch(err => {console.error(err)})
      }
  if(regLogg) { 
    return (
      <div>
      <h1>Registro exitoso</h1> 
      <h2>Vamos al inicio <Link to='/'>Inicio</Link></h2>
      </div>
    )
  }
  return(
    <>
      <form onSubmit={handleRegister}>
        <label>{registerStatus.msg} {registerStatus.nickname}</label>
        <label>
          <p>Nickname</p>
          <input type="text" onChange={e => setNickname(e.target.value)} />
        </label>
        <label>
          <p>Email</p>
          <input type="text" onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <p>Ya tienes cuenta?  <Link to="/login">Inicia sesión!</Link></p>
      <p>Vamos al inicio <Link to='/'>Inicio</Link></p>
    </>
  )
}

