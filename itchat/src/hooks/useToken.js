import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = window.localStorage.getItem('jwt');
    return tokenString
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    window.localStorage.setItem('jwt', userToken);
    setToken(userToken);
  };
  
  return {
    setToken: saveToken,
    token
  }
}