import React, {useEffect, useState}  from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";


import LoginPage from './pages/Login'
import Layout from "./pages/Layout";
import RegisterPage from "./pages/Register";

import NoPage from './pages/NoPage';
import App_style from './styles/App_style.css'

function App() {
  const [token, setToken] = useState('')
  useEffect(() => {
    setToken(window.localStorage.getItem('jwt'))
  },[token])
  
    if(!token) {
      return (
        <BrowserRouter>
          <Routes>
              <Route path='/register' element={<RegisterPage/>}/>  
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/' element={<LoginPage/>}/> 
              <Route path="*" element={<LoginPage/>} />     
          </Routes>
        </BrowserRouter>
  )}

  return (
    <>
      <BrowserRouter>
            
            <Routes>

                <Route path='/register' element={<RegisterPage/>}/>
                      
                <Route path='/login' element={<LoginPage/>}/>
             
                <Route path="/" element={<Layout/>} />

                <Route path="*" element={<NoPage/>} />
              
            </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;

